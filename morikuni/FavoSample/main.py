from datetime import timedelta
import json
from flask import Flask, flash, redirect, render_template, request, session, url_for, jsonify
from create_db import User, Post, Like, db

app = Flask(__name__)
db_uri = "postgresql://postgres:postgres@localhost:5432/fav_sample"
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
app.config['SECRET_KEY'] = 'asbbeuwbvfk'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config['SESSION_COOKIE_DURATION'] = timedelta(seconds=5)
db.init_app(app)

@app.route('/')
def first():
    if session != {}:
        return redirect(url_for('index'))
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter(User.username==username).first()
        if user is None or user.password != password:
            flash('ユーザーがいないかパスワードが違います。')
            return render_template('login.html')
        else:
            session['username'] = user.username
            session['user_id'] = user.id
            posts = Post.query.all()
            return redirect('index')

    if session:
        return redirect(url_for('index'))
    
    return render_template('login.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login'))

@app.route('/add', methods=['GET','POST'])
def add():
    body = request.form.get('body')
    post = Post(body=body)
    db.session.add(post)
    db.session.commit()
    return redirect(url_for('index'))

@app.route('/index')
def index():
    query = request.args.get('q')
    if query:
        posts = Post.query.filter(Post.body.like(f'%{query}%')).all()
    else:
        posts = Post.query.all()
    return render_template('index.html', posts=posts)

@app.route('/like', methods=['POST'])
def like():
    if request.method == 'POST':
        try:
            post_id = request.form['post_id']
            like = Like.query.filter(Like.post_id == post_id, Like.user_id == session['user_id']).first()
            if not like:
                like = Like(post_id=post_id, user_id=session['user_id'])
                db.session.add(like)
                db.session.commit()
                message = 'Like'
            else:
                db.session.delete(like)
                db.session.commit()
                message = 'UnLike'
        except Exception as e:
            print(e)
        likes = Like.query.filter(Like.post_id==post_id).count()
        status = {'status': message ,
                  'likes' : likes
                  }
        
        return json.dumps(status)

if __name__ == '__main__':
    app.run(port=123456, debug=True)
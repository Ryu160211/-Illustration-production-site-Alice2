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
        return redirect(url_for('gallery'))
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
            return redirect('gallery')

    if session:
        return redirect(url_for('gallery'))
    
    return render_template('login.html')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

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
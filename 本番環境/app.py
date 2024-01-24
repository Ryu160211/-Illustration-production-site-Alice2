from flask import Flask, redirect, render_template, request, session, url_for
from flask_login import LoginManager, current_user, login_required, login_user, logout_user
from init_database import OtherWork, db, db_uri, User, Creator, Content, Character, Like, Follow, AdminUser
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from werkzeug.security import generate_password_hash, check_password_hash


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
app.config['SECRET_KEY'] = 'secret_key'
app.config['FLASK_ADMIN_SWATCH'] = 'sandstone'

login_manager = LoginManager()
login_manager.init_app(app)
db.init_app(app)

class UserModelView(ModelView):
    column_display_pk = True  

admin = Admin(app, name='東方立ち絵素材', template_mode='bootstrap4')
admin.add_view(UserModelView(User, db.session))
admin.add_view(UserModelView(Creator, db.session))
admin.add_view(UserModelView(OtherWork, db.session))
admin.add_view(UserModelView(Content, db.session))
admin.add_view(UserModelView(Character, db.session))

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@login_manager.unauthorized_handler
def unautherized():
    return redirect('/')

@app.route('/')
def home():
    return redirect(url_for('contents'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        name = request.form['name']
        password = request.form['password']
        user = User.query.filter_by(name=name).first()
        if check_password_hash(user.password, password):
            login_user(user)
            return redirect('contents')
    title = '東方立ち絵広場-ログイン'
    css = 'css/login.css'
    return render_template('login.html', title=title, css=css) 


@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect('contents')

@app.route('/contents')
def contents():
    title = '東方立ち絵広場-contents'
    contents = Content.query.order_by(Content.id.asc()).all()
    return render_template('contents.html', css='css/contents.css', title=title, contents=contents)

@app.route('/content/<content_id>')
def content(content_id):
    content = Content.query.filter_by(id=content_id).first()
    isLike = content.isLike(current_user.id)
    like_count = Like.query.filter_by(content_id=content.id).count()
    character = Character.query.filter_by(id=content.character_id).first()
    creator = Creator.query.filter_by(id=content.creator_id).first()
    other_contents = Content.query.filter_by(creator_id=creator.id).limit(3).all()
    title = '東方立ち絵広場-' + creator.name
    return render_template('content.html', css='css/content.css',title=title, content=content, isLike=isLike, like_count=like_count ,character=character, creator=creator, other_contents=other_contents) 

@app.route('/creators')
def creators():
    title = '東方立ち絵広場-creators'
    creators = Creator.query.order_by(Creator.id.asc()).all()
    return render_template('creators.html', css='css/creators.css', title=title, creators=creators)

@app.route('/creators/<creator_id>')
def creator(creator_id):
    creator = Creator.query.filter_by(id=creator_id).first()
    title = '東方立ち絵広場-' + creator.name
    otherworks = OtherWork.query.filter_by(creator_id=creator.id).order_by(OtherWork.index.asc()).all()
    contents = Content.query.filter_by(creator_id=creator.id).limit(4).all()
    return render_template('creator.html', css='css/creator.css', title=title, creator=creator, otherworks=otherworks, contents=contents)

@app.route('/how')
def how():
    title = '東方立ち絵広場-how to'
    return render_template('how.html', css='css/how.css', title=title)

@app.route('/rule')
def rule():
    return 'rule'

@app.route('/philosophy')
def philosophy():
    return 'philosophy'

@app.route('/signup1')
def signup1():
    title = '東方立ち絵広場-会員登録'
    return render_template('signup1.html', title=title, css='css/signup1.css')

@app.route('/signup2')
def signup2():
    title='東方立ち絵広場-会員登録'
    return render_template('signup2.html', title=title, css='css/signup2.css')

@app.route('/signup3')
def signup3():
    title='東方立ち絵広場-会員登録'
    return render_template('signup3.html', title=title, css='css/signup3.css')

@app.route('/signup4', methods=['GET', 'POST'])
def signup4():
    if request.method == 'POST':
        name = request.form['name']
        password = request.form['password']
        user = User(name=name, password=generate_password_hash(password))
        db.session.add(user)
        db.session.commit()
        title='東方立ち絵広場-会員登録'
        return render_template('signup4.html', title=title, css='css/signup4.css')

if __name__ == '__main__':
    app.run(port=123456, debug=True)
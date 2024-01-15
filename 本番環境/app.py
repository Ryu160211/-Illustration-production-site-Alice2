from flask import Flask, redirect, render_template, request, url_for
from init_database import db, db_uri, User, Creator, Content, Character, Like, Follow, AdminUser
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
app.config['SECRET_KEY'] = 'secret_key'
app.config['FLASK_ADMIN_SWATCH'] = 'sandstone'
db.init_app(app)

class UserModelView(ModelView):
    column_display_pk = True  

admin = Admin(app, name='東方立ち絵素材', template_mode='bootstrap4')
admin.add_view(UserModelView(User, db.session))
admin.add_view(UserModelView(Creator, db.session))
admin.add_view(UserModelView(Content, db.session))
admin.add_view(UserModelView(Character, db.session))

@app.route('/')
def home():
    return redirect(url_for('contents'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        name = request.form['name']
        password = request.form['password']
        admin = AdminUser.query.filter_by(name=name).first()
        if admin.password == password:
            return redirect(url_for('admin.index'))
    title = '東方立ち絵広場-ログイン'
    css = 'css/login.css'
    return render_template('login.html', title=title, css=css) 

@app.route('/contents')
def contents():
    title = '東方立ち絵広場-gallery'
    contents = Content.query.order_by(Content.id.asc()).all()
    return render_template('contents.html', css='css/contents.css', title=title, contents=contents)

@app.route('/content/<content_name>/<content_id>')
def content(content_name, content_id):
    title = '東方立ち絵広場-' + content_name
    content = Content.query.filter_by(id=content_id).first()
    character = Character.query.filter_by(id=content.character_id).first()
    creator = Creator.query.filter_by(id=content.creator_id).first()
    other_contents = Content.query.filter_by(creator_id=creator.id).limit(3).all()
    return render_template('content.html', css='css/content.css',title=title, content=content, character=character, creator=creator, other_contents=other_contents) 

@app.route('/creators')
def creators():
    title = '東方立ち絵広場-creators'
    creators = Creator.query.order_by(Creator.id.asc()).all()
    return render_template('creators.html', css='css/creators.css', title=title, creators=creators)

@app.route('/how')
def how():
    return 'how'

@app.route('/rule')
def rule():
    return 'rule'

@app.route('/philosophy')
def philosophy():
    return 'philosophy'

@app.route('/signup')
def registlation():
    return 'regist'

if __name__ == '__main__':
    app.run(port=123456, debug=True)
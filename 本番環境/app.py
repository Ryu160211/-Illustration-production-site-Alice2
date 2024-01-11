from flask import Flask, redirect, render_template, request, url_for
from init_database import db, db_uri, User, Creator, Content, Character, Like, Follow, AdminUser
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
app.config['SECRET_KEY'] = 'secret_key'
db.init_app(app)

admin = Admin(app)
admin.add_view(ModelView(User, db.session))
admin.add_view(ModelView(Creator, db.session))
admin.add_view(ModelView(Content, db.session))
admin.add_view(ModelView(Character, db.session))

@app.route('/')
def home():
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        name = request.form['name']
        password = request.form['password']
        admin = AdminUser.query.filter_by(name=name).first()
        if admin.password == password:
            return redirect(url_for('admin'))
    return render_template('login.html') 

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

@app.route('/gallery/<str>', methods=['GET', 'POST'])
def gallery_detail():
    return 'gallery_detail' 

@app.route('/artist')
def artist():
    return 'artist'

@app.route('/philosophy')
def philosophy():
    return 'philosophy'

@app.route('/signup')
def registlation():
    return 'regist'

if __name__ == '__main__':
    app.run(port=123456, debug=True)
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

app = Flask(__name__)
db_uri = "postgresql://postgres:postgres@localhost:5432/test"
app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), index=True)
    password = db.Column(db.String, unique=True)
    mail = db.Column(db.String, index=True)


class Creator(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), index=True)
    mail = db.Column(db.String, index=True)
    introduce = db.Column(db.String(1000))
    icon = db.Column(db.String, index=True)
    twitter = db.Column(db.String)
    pixiv = db.Column(db.String)
    skeb = db.Column(db.String)


class Content(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), index=True)
    filename = db.Column(db.String)
    icon = db.Column(db.String)
    creator_id = db.Column(db.Integer)
    character_id = db.Column(db.Integer)
    desc = db.Column(db.String(1000))

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, index=True)
    content_id = db.Column(db.Integer, index=True)
    date = db.Column(db.String)
    body = db.Column(db.String(200))

class Character(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), index=True)


class Like(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    content_id = db.Column(db.Integer, db.ForeignKey("image.id"))


class Follow(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    creator_id = db.Column(db.Integer, db.ForeignKey("creator.id"))

class AdminUser(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), index=True)
    password = db.Column(db.String, unique=True)

with app.app_context():
    db.create_all()

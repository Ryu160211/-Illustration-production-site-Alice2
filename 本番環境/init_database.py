from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

app = Flask(__name__)
db_uri = "sqlite:///database.db"
app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
db = SQLAlchemy(app)

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), index=True, nullable=False)
    password = db.Column(db.String, unique=True, nullable=False)


class Creator(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), index=True, nullable=False)
    mail = db.Column(db.String, index=True)
    introduce = db.Column(db.String(1000))
    icon = db.Column(db.String, index=True, nullable=False)
    background = db.Column(db.String, index=True)
    twitter = db.Column(db.String)
    pixiv = db.Column(db.String)
    skeb = db.Column(db.String)


class Content(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), index=True, nullable=False)
    filename = db.Column(db.String, nullable=False)
    icon = db.Column(db.String, nullable=False)
    creator_id = db.Column(db.Integer, nullable=False)
    character_id = db.Column(db.Integer, nullable=False)
    desc = db.Column(db.String(1000))
    download = db.Column(db.String)

class OtherWork(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    creator_id = db.Column(db.Integer, index=True, nullable=False)
    index = db.Column(db.Integer, index=True, nullable=False)
    filename = db.Column(db.String, nullable=False)
    link = db.Column(db.String)

class Character(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    jp_name = db.Column(db.String(100), index=True, nullable=False)
    en_name = db.Column(db.String(100), index=True, nullable=False)

class Like(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, index=True)
    content_id = db.Column(db.Integer, index=True)


class Follow(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, index=True)
    creator_id = db.Column(db.Integer, index=True)

class AdminUser(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), index=True)
    password = db.Column(db.String, unique=True)

with app.app_context():
    db.create_all()

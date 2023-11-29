from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

app = Flask(__name__)
db_uri = "postgresql://postgres:postgres@localhost:5432/fav_sample"
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), index=True, unique=True)
    password = db.Column(db.String(30), unique=True)
    likes = db.relationship('Like', backref='user', lazy='dynamic')

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(140))
    likes = db.relationship('Like', backref='post', lazy='dynamic')

    def isLike(self, user_id):
        like = Like.query.filter(Like.post_id==self.id, Like.user_id==user_id).first()
        if like:
            return True
        return False

class Like(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'))

    @staticmethod
    def count(self):
        return Like.query.filter_by(post_id=self.post_id).count()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
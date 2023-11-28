from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
db_uri = "postgresql://postgres:postgres@localhost:5432/image_sample"
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
db = SQLAlchemy(app)

class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.String(30), unique=True)
    filename = db.Column(db.String, unique=True)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
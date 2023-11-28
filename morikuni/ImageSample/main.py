from flask import Flask,render_template, request, session, url_for, jsonify
from init_db import Image, db

app = Flask(__name__)
db_uri = "postgresql://postgres:postgres@localhost:5432/image_sample"
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
app.config['SECRET_KEY'] = 'asbbeuwbvfk'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)

@app.route('/')
def index():
    images = Image.query.all()
    return render_template('gallery.html', images=images)

if __name__ == '__main__':
    app.run(port=123456, debug=True)
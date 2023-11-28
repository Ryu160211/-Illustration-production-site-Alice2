from flask import Flask
from init_db import Image, db
import pandas as pd

app = Flask(__name__)
db_uri = "postgresql://postgres:postgres@localhost:5432/image_sample"
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)

image_datas = pd.read_csv('image_data.csv')
with app.app_context():
    for index, row in image_datas.iterrows():
        image = Image(id=row['id'], author=row['author'], filename=row['filename'])
        db.session.add(image)
    db.session.commit()
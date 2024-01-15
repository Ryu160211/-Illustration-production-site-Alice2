from flask import Flask
from init_database import db, db_uri, Character, Creator, Content
import pandas as pd

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
db.init_app(app)

chara_df = pd.read_csv("./static/csv/character_data.csv")
content_df = pd.read_csv("./static/csv/content_data.csv")
creator_df = pd.read_csv("./static/csv/creator_data.csv")

with app.app_context():
    db.session.query(Character).delete()
    db.session.query(Content).delete()
    db.session.query(Creator).delete()
    db.session.commit()
    
    for index, row in chara_df.iterrows():
        character = Character(id=row["id"], name=row["name"])
        db.session.add(character)

    for index, row in content_df.iterrows():
        content = Content(
            id=row["id"],
            name=row["name"],
            character_id=row["character_id"],
            filename=row["filename"],
            icon=row["icon"],
            desc=row["desc"],
        )
        db.session.add(content)

    for index, row in creator_df.iterrows():
        creator = Creator(
            id=row["id"],
            name=row["name"],
            mail=row["mail"],
            icon=row["icon"],
            introduce=row["introduce"],
            twitter=row["twitter"],
            pixiv=row["pixiv"],
            skeb=row["skeb"],
        )
        db.session.add(creator)

    db.session.commit()

from flask import Flask
from init_database import OtherWork, db, db_uri, Character, Creator, Content
import pandas as pd

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
db.init_app(app)

chara_df = pd.read_csv("./static/csv/character_data.csv")
content_df = pd.read_csv("./static/csv/content_data.csv")
other_df = pd.read_csv('./static/csv/otherwork_data.csv')
creator_df = pd.read_csv("./static/csv/creator_data.csv")

with app.app_context():
    for index, row in chara_df.iterrows():
        character = Character(id=row["id"], jp_name=row["jp_name"], en_name=row["en_name"])
        db.session.add(character)

    for index, row in content_df.iterrows():
        content = Content(
            id=row["id"],
            name=row["name"],
            filename=row["filename"],
            icon=row["icon"],
            creator_id=row["creator_id"],
            character_id=row["character_id"],
            desc=row["desc"],
            download=row["download"]
        )
        db.session.add(content)

    for index, row in other_df.iterrows():
        other_work = OtherWork(
            id=row["id"],
            creator_id=row["creator_id"],
            index=row["index"],
            filename=row["filename"],
            link=row["index"]
        )
        db.session.add(other_work)

    for index, row in creator_df.iterrows():
        creator = Creator(
            id=row["id"],
            name=row["name"],
            mail=row["mail"],
            introduce=row["introduce"],
            icon=row["icon"],
            background=row["background"],
            twitter=row["twitter"],
            pixiv=row["pixiv"],
            skeb=row["skeb"],
        )
        db.session.add(creator)

    db.session.commit()

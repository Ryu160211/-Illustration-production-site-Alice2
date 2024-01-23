from flask import Flask
from init_database import db, db_uri, User, Creator, Character, Content, OtherWork, Like, Follow
import pandas as pd

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
db.init_app(app)

with app.app_context():
    users = User.query.all()
    creators = Creator.query.all()
    characters = Character.query.all()
    contents = Content.query.all()
    otherWorks = OtherWork.query.all()
    likes = Like.query.all()
    follows= Follow.query.all()

    user_df = pd.DataFrame(columns=['id', 'name', 'password'])
    creator_df = pd.DataFrame(columns=['id', 'name', 'mail', 'icon', 'background', 'introduce', 'twitter', 'pixiv', 'skeb'])
    character_df = pd.DataFrame(columns=['id', 'jp_name', 'en_name'])
    content_df = pd.DataFrame(columns=['id', 'name', 'creator_id', 'character_id', 'filename', 'icon', 'desc'])
    otherwork_df = pd.DataFrame(columns=['id', 'creator_id', 'filename', 'link'])
    like_df = pd.DataFrame(columns=['id', 'user_id', 'content_id'])
    follow_df = pd.DataFrame(columns=['id', 'user_id', 'content_id'])

    for i, content in enumerate(contents):
        content_df.loc[i+1] = [content.id, content.name, content.creator_id, content.character_id, content.filename, content.icon, content.desc]
    
    content_df.to_csv('static/csv/content_data.csv')
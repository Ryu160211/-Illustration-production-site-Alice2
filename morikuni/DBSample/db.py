from flask import Flask, redirect, render_template, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Integer, String, Column
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

# db接続用　"postgresql://postgres:postgres@localhost:5432/"
db_uri = "postgresql://postgres:postgres@localhost:5432/user"
app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = "jeremi4h"
db = SQLAlchemy(app)


# ユーザークラスの作成
class User(db.Model):
    id = Column(Integer, unique=True, primary_key=True)
    name = Column(String, nullable=False)
    mail = Column(String, nullable=False)
    password = Column(String, nullable=False)

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)


@app.route("/")
def select_sql():
    message = "ようこそ！"
    users = User.query.all()
    return render_template("index.html", message=message, users=users)


@app.route("/", methods=["POST"])
def insert_user():
    name = request.form.get("name")
    mail = request.form.get("mail")
    pwd = request.form.get("pwd")


    user = User(name=name, mail=mail)
    user.set_password(pwd)
    db.session.add(user)
    db.session.commit()

    return redirect("/")


if __name__ == "__main__":
    app.run(port=123456, debug=True)

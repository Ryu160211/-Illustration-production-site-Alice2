from flask import Flask, render_template, request, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String
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
def main_page():
    return render_template("index.html")


# ログイン処理
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # 画面で入力された情報を取得
        username = request.form["username"]
        password = request.form["password"]

        user = User.query.filter(User.name == username).first()

        # ログイン可否を判定
        if user.check_password(password):
            session["username"] = user.name

            # ログイン成功でdashbord.htmlを返す
            return redirect(url_for("dashboard"))
        else:
            return render_template("login.html", error="Invalid credentials")

    # GETの場合はログイン画面へ戻す
    return render_template("login.html")


# URL直接参照の場合
@app.route("/dashboard")
def dashboard():
    # ログインしている場合はdashbord.htmlへ
    if session['username'] :
        return render_template("dashboard.html")
    else:
        return redirect(url_for("login"))


# ログアウト機能
@app.route("/logout", methods=["GET", "POST"])
def logout():
    session.pop("username", None)
    return redirect(url_for("login"))


if __name__ == "__main__":
    app.run(port=123456, debug=True)

from flask import Flask, render_template, request
import random
import json

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("yubaba.html")

@app.route("/call_from_ajax", methods = ["POST"])
def callfromajax():
    if request.method == "POST":
        # ここにPythonの処理を書く
        try:
            name = request.form["data"]
            new_name = random.choice(name)
            message = f"フン。<b>{name}</b>というのかい。贅沢な名だねぇ。<br>"
            message += f"今からお前の名前は<b>{new_name}</b>だ。<br>"  
            message += f"いいかい、<b>{new_name}</b>だよ。"
            message += f"分かったら返事をするんだ、<b>{new_name}</b>!!"
        except Exception as e:
            message = str(e)
        dict = {"answer": message}      # 辞書
    return json.dumps(dict)             # 辞書をJSONにして返す

if __name__ == "__main__":
    app.run(port=123456,debug=True)

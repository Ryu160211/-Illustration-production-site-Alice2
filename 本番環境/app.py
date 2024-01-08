from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'home'

@app.route('/gallery')
def gallery():
    return 'gallery'

@app.route('/artist')
def artist():
    return 'artist'

@app.route('/philosophy')
def philosophy():
    return 'philosophy'

@app.route('/regist')
def registlation():
    return 'regist'

if __name__ == '__main__':
    app.run(port=123456, debug=True)
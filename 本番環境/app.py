from flask import Flask, redirect, render_template, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return redirect(url_for('gallery'))

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

@app.route('/gallery/<str>', methods=['GET', 'POST'])
def gallery_detail():
    return 'gallery_detail' 

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
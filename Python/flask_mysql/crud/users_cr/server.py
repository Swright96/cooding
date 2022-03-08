from flask import Flask, render_template, request, redirect
from users import User
app = Flask(__name__)

@app.route('/')
def index():
    users = User.show_all()
    print(users)
    return render_template('index.html', all_users = users)

@app.route('/new_user')
def add_user():
    return render_template('new_user.html')

@app.route('/create', methods = ['POST'])
def create():
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email']
    }
    User.new_user(data)
    return redirect('/')
if __name__ == "__main__":
    app.run(debug=True)
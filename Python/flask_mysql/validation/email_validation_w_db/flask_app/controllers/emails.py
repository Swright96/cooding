from re import L
from flask import render_template, redirect, request
from flask_app import app
from flask_app.models.email import Email

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    if not Email.validate(request.form):
        return redirect('/')
    Email.save(request.form)
    return redirect('/success')

@app.route('/success')
def all_users():
    emails = Email.get_all_emails()
    return render_template('all_users.html', all_emails = emails)
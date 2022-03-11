from flask import render_template, request, redirect
from flask_app.models import ninja, dojo
from flask_app import app

@app.route('/ninjas')
def ninjas():
    return render_template('ninjas.html', dojos= dojo.Dojo.get_all_dojos())


@app.route('/create_ninja', methods=['POST'])
def create_ninja():
    ninja.Ninja.save(request.form)
    return redirect('/')
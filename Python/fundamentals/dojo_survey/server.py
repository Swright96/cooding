from flask import Flask, render_template, redirect, session, request
app = Flask(__name__)

app.secret_key = 'If the world was only the size of a pea, would you be able to see the sea?'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods = ['POST']) 
def process():
    if not User.validate(request.form):
        return redirect('/')

    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comments'] = request.form['comments']
    return redirect('/success')

@app.route('/success')
def success():
    return render_template('results.html')


from flask import flash
class User:

    @staticmethod
    def validate(user):
        is_valid = True
        if len(user['name']) < 3:
            flash("Name must be at least 3 characters")
            is_valid = False
        if not (user['location']):
            flash("A location is required")
            is_valid = False
        if not (user['language']):
            flash("A language is required")
            is_valid = False
        if len(user['comments']) < 3:
            flash("Comments must be more than 3 characters")
            is_valid = False
        return is_valid

if __name__=="__main__":    
    app.run(debug=True)
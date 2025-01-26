from flask import Flask, request, render_template, redirect
import mysql.connector

app = Flask(__name__)

# Database connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="mighty@098",
    database="art_portfolio"
)

@app.route('/')
def home():
    return render_template('index.html')



@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/shop')
def shop():
    return render_template('shop.html')





@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    cursor = db.cursor()
    query = "INSERT INTO contacts (name, email, message) VALUES (%s, %s, %s)"
    cursor.execute(query, (name, email, message))
    db.commit()
    cursor.close()
    
    return redirect('/thank-you')  # Redirect to a Thank You page

@app.route('/thank-you')
def thank_you():
    return "<h2>Thank you for contacting us!</h2>"

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user_data.db'
app.config['SECRET_KEY'] = 'This is my secret key'
db = SQLAlchemy(app)
from crud_application import route

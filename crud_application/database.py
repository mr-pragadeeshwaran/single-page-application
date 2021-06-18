from crud_application import db
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, RadioField, SelectField
from wtforms.fields.html5 import DateField, EmailField, IntegerField
from wtforms.validators import DataRequired, Email

class UsersInfo(db.Model):
    id = db.Column(db.String(90), primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    date_of_joining = db.Column(db.String(120), unique=False, nullable=False)
    DOB = db.Column(db.String(120), unique=False, nullable=False)
    phone = db.Column(db.Integer, unique=True, nullable=False)
    gender = db.Column(db.String(120), unique=False, nullable=False)
    street_address = db.Column(db.String(120), unique=False, nullable=False)
    city = db.Column(db.String(120), unique=False, nullable=False)
    postal_code = db.Column(db.String(120), unique=False, nullable=False)


class InputForm(FlaskForm):
    name = StringField("Name")
    email = EmailField("Email", validators=[DataRequired(Email())])
    date_of_joining = DateField('D.O.J', format='%Y-%m-%d', validators=[DataRequired()])
    DOB = DateField('D.O.B', format='%Y-%m-%d', validators=[DataRequired()])
    phone = IntegerField("Phone Number")
    gender = RadioField('Gender',
                        validators=[DataRequired()],
                        choices=[("male", 'Male'), ("female", 'Female')])
    street_address = StringField("Address")
    city = StringField("City")
    postal_code = IntegerField("Postal Code")
    submit = SubmitField("Submit")


class UpdateForm(FlaskForm):
    id = StringField("Enter a ID")
    field = SelectField('Choose Field',
                        choices=[('name', 'Name'), ('email', 'Email'), ('date_of_joining', 'Date of Joining')
                            , ('DOB', 'D.O.B'), ('phone', 'Phone'), ('gender', 'Gender'),
                                 ('street_address', 'Street address')
                            , ('city', 'City'), ('postal_code', 'Postal_code')], validators=[DataRequired()])

    name = StringField("Name")
    email = EmailField("Email")
    date_of_joining = DateField('D.O.J', format='%Y-%m-%d')
    DOB = DateField('D.O.B', format='%Y-%m-%d')
    phone = IntegerField("Phone Number")
    gender = RadioField('Gender', choices=[("male", 'Male'), ("female", 'Female')])
    street_address = StringField("Address")
    city = StringField("City")
    postal_code = IntegerField("Postal Code")
    submit = SubmitField("Submit")


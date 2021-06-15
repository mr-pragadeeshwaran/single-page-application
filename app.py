from flask import Flask, render_template, request
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, RadioField, SelectField
from wtforms.fields.html5 import DateField, EmailField, IntegerField
from wtforms.validators import DataRequired, Email
from flask_sqlalchemy import SQLAlchemy
import uuid

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user_data.db'
app.config['SECRET_KEY'] = 'This is my secret key'
db = SQLAlchemy(app)


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


@app.route('/')
def home():
    form = UpdateForm()
    in_form = InputForm()
    our_users = UsersInfo.query.all()
    return render_template('index.html', form=form, our_users=our_users, in_form=in_form)


@app.route('/add', methods=['GET', 'POST'])
def input_form():
    form = InputForm()
    a = uuid.uuid4().hex[:5]
    try:
        request_form = request.form
        user_data = UsersInfo(id=a,name=request.form.get('name'), email=request.form.get('email'),
                              date_of_joining=request.form.get('doj')
                              , DOB=request.form.get('dob'), phone=request.form.get('phone'), gender=request.form.get('gender'),
                              street_address=request.form.get('add'), city=request.form.get('city'),
                              postal_code=request.form.get('pcode'))
        db.session.add(user_data)
        db.session.commit()
        return 'User Details Added'
    except:
        return "Please Check Your Phone Number/Email That already exist.... "


@app.route('/update_records', methods=['GET', 'POST'])
def update_records():
    form = UpdateForm()
    try:
        update_data = UsersInfo.query.filter_by(id=request.form.get('id')).first()
        if request.form.get('field') == 'name':
            update_data.name = request.form.get('name')
            db.session.commit()
        elif request.form.get('field') == 'email':
            update_data.email = request.form.get('email')
            db.session.commit()
        elif request.form.get('field') == 'phone':
            update_data.phone = request.form.get('phone')
            db.session.commit()
        elif request.form.get('field') == 'gender':
            update_data.gender = request.form.get('gender')
            db.session.commit()
        elif request.form.get('field') == 'date_of_joining':
            update_data.date_of_joining = request.form.get('doj')
            db.session.commit()
        elif request.form.get('field') == 'DOB':
            update_data.DOB = request.form.get('dob')
            db.session.commit()
        elif request.form.get('field') == 'street_address':
            update_data.street_address = request.form.get('add')
            db.session.commit()
        elif request.form.get('field') == 'city':
            update_data.city = request.form.get('city')
            db.session.commit()
        elif request.form.get('field') == 'postal_code':
            update_data.postal_code = request.form.get('pcode')
            db.session.commit()

        return 'Details Updated'
    except:
        return "Enter ID Cannot exist"

@app.route('/delete', methods=['GET', 'POST'])
def delete_records():
    form = UpdateForm()
    try:
        user_to_delete = UsersInfo.query.get_or_404(request.form.get('id'))
        db.session.delete(user_to_delete)
        db.session.commit()
        return 'Record Deleted'
    except:
        return 'ID Cannot exist'


if __name__ == '__main__':
    app.run(debug=True)

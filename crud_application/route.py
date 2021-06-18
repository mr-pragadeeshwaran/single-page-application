from crud_application import app
from flask import render_template,request
from crud_application.database import UpdateForm,InputForm,UsersInfo
import uuid
from crud_application import db

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
        req = request.form
        update_data = UsersInfo.query.filter_by(id=request.form.get('id')).first()
        if req.get('field') == 'name':
            update_data.name = req.get('name')
            db.session.commit()
        elif req.get('field') == 'email':
            update_data.email = req.get('email')
            db.session.commit()
        elif req.get('field') == 'phone':
            update_data.phone = req.get('phone')
            db.session.commit()
        elif req.get('field') == 'gender':
            update_data.gender = req.get('gender')
            db.session.commit()
        elif req.get('field') == 'date_of_joining':
            update_data.date_of_joining = req.get('doj')
            db.session.commit()
        elif req.get('field') == 'DOB':
            update_data.DOB = req.get('dob')
            db.session.commit()
        elif req.get('field') == 'street_address':
            update_data.street_address = req.get('add')
            db.session.commit()
        elif req.get('field') == 'city':
            update_data.city = req.get('city')
            db.session.commit()
        elif req.get('field') == 'postal_code':
            update_data.postal_code = req.get('pcode')
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

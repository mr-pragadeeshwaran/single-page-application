    function My_function2(){
            document.getElementById('name_field1').style.display = 'none';
            document.getElementById('name_field2').style.display = 'none';
            document.getElementById('email_field1').style.display = 'none';
            document.getElementById('email_field2').style.display = 'none';
            document.getElementById('date_of_joining_field1').style.display = 'none';
            document.getElementById('date_of_joining_field2').style.display = 'none';
            document.getElementById('gender_field1').style.display = 'none';
            document.getElementById('gender_field2').style.display = 'none';
            document.getElementById('DOB_field1').style.display = 'none';
            document.getElementById('DOB_field2').style.display = 'none';
            document.getElementById('street_address_field1').style.display = 'none';
            document.getElementById('street_address_field2').style.display = 'none';
            document.getElementById('city_field1').style.display = 'none';
            document.getElementById('city_field2').style.display = 'none';
            document.getElementById('phone_field1').style.display = 'none';
            document.getElementById('phone_field2').style.display = 'none';
            document.getElementById('postal_code_field1').style.display = 'none';
            document.getElementById('postal_code_field2').style.display = 'none';
    }


    function My_function(){

        var x=document.getElementById('f1');


        if(x.value=="email"){
            document.getElementById(`${x.value}_field1`).style.display = 'block';
            document.getElementById(`${x.value}_field2`).style.display = 'block';
        }
        if(x.value=="name"){
            document.getElementById('name_field1').style.display = 'block';
            document.getElementById('name_field2').style.display = 'block';
            document.getElementById('email_field1').style.display = 'none';
            document.getElementById('email_field2').style.display = 'none';
            document.getElementById('date_of_joining_field1').style.display = 'none';
            document.getElementById('date_of_joining_field2').style.display = 'none';
            document.getElementById('gender_field1').style.display = 'none';
            document.getElementById('gender_field2').style.display = 'none';
            document.getElementById('DOB_field1').style.display = 'none';
            document.getElementById('DOB_field2').style.display = 'none';
            document.getElementById('street_address_field1').style.display = 'none';
            document.getElementById('street_address_field2').style.display = 'none';
            document.getElementById('city_field1').style.display = 'none';
            document.getElementById('city_field2').style.display = 'none';
            document.getElementById('phone_field1').style.display = 'none';
            document.getElementById('phone_field2').style.display = 'none';
            document.getElementById('postal_code_field1').style.display = 'none';
            document.getElementById('postal_code_field2').style.display = 'none';

        }
        if(x.value=="date_of_joining"){
            document.getElementById('name_field1').style.display = 'none';
            document.getElementById('name_field2').style.display = 'none';
            document.getElementById('email_field1').style.display = 'none';
            document.getElementById('email_field2').style.display = 'none';
            document.getElementById('date_of_joining_field1').style.display = 'block';
            document.getElementById('date_of_joining_field2').style.display = 'block';
            document.getElementById('gender_field1').style.display = 'none';
            document.getElementById('gender_field2').style.display = 'none';
            document.getElementById('DOB_field1').style.display = 'none';
            document.getElementById('DOB_field2').style.display = 'none';
            document.getElementById('street_address_field1').style.display = 'none';
            document.getElementById('street_address_field2').style.display = 'none';
            document.getElementById('city_field1').style.display = 'none';
            document.getElementById('city_field2').style.display = 'none';
            document.getElementById('phone_field1').style.display = 'none';
            document.getElementById('phone_field2').style.display = 'none';
            document.getElementById('postal_code_field1').style.display = 'none';
            document.getElementById('postal_code_field2').style.display = 'none';

        }
        if(x.value=="DOB"){
            document.getElementById('name_field1').style.display = 'none';
            document.getElementById('name_field2').style.display = 'none';
            document.getElementById('email_field1').style.display = 'none';
            document.getElementById('email_field2').style.display = 'none';
            document.getElementById('gender_field1').style.display = 'none';
            document.getElementById('gender_field2').style.display = 'none';
            document.getElementById('date_of_joining_field1').style.display = 'none';
            document.getElementById('date_of_joining_field2').style.display = 'none';
            document.getElementById('street_address_field1').style.display = 'none';
            document.getElementById('street_address_field2').style.display = 'none';
            document.getElementById('city_field1').style.display = 'none';
            document.getElementById('city_field2').style.display = 'none';
            document.getElementById('phone_field1').style.display = 'none';
            document.getElementById('phone_field2').style.display = 'none';
            document.getElementById('postal_code_field1').style.display = 'none';
            document.getElementById('postal_code_field2').style.display = 'none';
            document.getElementById('DOB_field1').style.display = 'block';
            document.getElementById('DOB_field2').style.display = 'block';

        }
        if(x.value=="gender"){
            document.getElementById('name_field1').style.display = 'none';
            document.getElementById('name_field2').style.display = 'none';
            document.getElementById('email_field1').style.display = 'none';
            document.getElementById('email_field2').style.display = 'none';
            document.getElementById('gender_field1').style.display = 'block';
            document.getElementById('gender_field2').style.display = 'block';
            document.getElementById('date_of_joining_field1').style.display = 'none';
            document.getElementById('date_of_joining_field2').style.display = 'none';
            document.getElementById('street_address_field1').style.display = 'none';
            document.getElementById('street_address_field2').style.display = 'none';
            document.getElementById('city_field1').style.display = 'none';
            document.getElementById('city_field2').style.display = 'none';
            document.getElementById('phone_field1').style.display = 'none';
            document.getElementById('phone_field2').style.display = 'none';
            document.getElementById('postal_code_field1').style.display = 'none';
            document.getElementById('postal_code_field2').style.display = 'none';
            document.getElementById('DOB_field1').style.display = 'none';
            document.getElementById('DOB_field2').style.display = 'none';

        }
        if(x.value=="phone"){
            document.getElementById('name_field1').style.display = 'none';
            document.getElementById('name_field2').style.display = 'none';
            document.getElementById('email_field1').style.display = 'none';
            document.getElementById('email_field2').style.display = 'none';
            document.getElementById('gender_field1').style.display = 'none';
            document.getElementById('gender_field2').style.display = 'none';
            document.getElementById('date_of_joining_field1').style.display = 'none';
            document.getElementById('date_of_joining_field2').style.display = 'none';
            document.getElementById('street_address_field1').style.display = 'none';
            document.getElementById('street_address_field2').style.display = 'none';
            document.getElementById('city_field1').style.display = 'none';
            document.getElementById('city_field2').style.display = 'none';
            document.getElementById('phone_field1').style.display = 'block';
            document.getElementById('phone_field2').style.display = 'block';
            document.getElementById('postal_code_field1').style.display = 'none';
            document.getElementById('postal_code_field2').style.display = 'none';
            document.getElementById('DOB_field1').style.display = 'none';
            document.getElementById('DOB_field2').style.display = 'none';

        }
        if(x.value=="street_address"){
            document.getElementById('name_field1').style.display = 'none';
            document.getElementById('name_field2').style.display = 'none';
            document.getElementById('email_field1').style.display = 'none';
            document.getElementById('email_field2').style.display = 'none';
            document.getElementById('gender_field1').style.display = 'none';
            document.getElementById('gender_field2').style.display = 'none';
            document.getElementById('date_of_joining_field1').style.display = 'none';
            document.getElementById('date_of_joining_field2').style.display = 'none';
            document.getElementById('street_address_field1').style.display = 'block';
            document.getElementById('street_address_field2').style.display = 'block';
            document.getElementById('city_field1').style.display = 'none';
            document.getElementById('city_field2').style.display = 'none';
            document.getElementById('phone_field1').style.display = 'none';
            document.getElementById('phone_field2').style.display = 'none';
            document.getElementById('postal_code_field1').style.display = 'none';
            document.getElementById('postal_code_field2').style.display = 'none';
            document.getElementById('DOB_field1').style.display = 'none';
            document.getElementById('DOB_field2').style.display = 'none';

        }
        if(x.value=="city"){
            document.getElementById('name_field1').style.display = 'none';
            document.getElementById('name_field2').style.display = 'none';
            document.getElementById('email_field1').style.display = 'none';
            document.getElementById('email_field2').style.display = 'none';
            document.getElementById('gender_field1').style.display = 'none';
            document.getElementById('gender_field2').style.display = 'none';
            document.getElementById('date_of_joining_field1').style.display = 'none';
            document.getElementById('date_of_joining_field2').style.display = 'none';
            document.getElementById('street_address_field1').style.display = 'none';
            document.getElementById('street_address_field2').style.display = 'none';
            document.getElementById('city_field1').style.display = 'block';
            document.getElementById('city_field2').style.display = 'block';
            document.getElementById('phone_field1').style.display = 'none';
            document.getElementById('phone_field2').style.display = 'none';
            document.getElementById('postal_code_field1').style.display = 'none';
            document.getElementById('postal_code_field2').style.display = 'none';
            document.getElementById('DOB_field1').style.display = 'none';
            document.getElementById('DOB_field2').style.display = 'none';

        }
        if(x.value=="postal_code"){
            document.getElementById('name_field1').style.display = 'none';
            document.getElementById('name_field2').style.display = 'none';
            document.getElementById('email_field1').style.display = 'none';
            document.getElementById('email_field2').style.display = 'none';
            document.getElementById('gender_field1').style.display = 'none';
            document.getElementById('gender_field2').style.display = 'none';
            document.getElementById('date_of_joining_field1').style.display = 'none';
            document.getElementById('date_of_joining_field2').style.display = 'none';
            document.getElementById('street_address_field1').style.display = 'none';
            document.getElementById('street_address_field2').style.display = 'none';
            document.getElementById('city_field1').style.display = 'none';
            document.getElementById('city_field2').style.display = 'none';
            document.getElementById('phone_field1').style.display = 'none';
            document.getElementById('phone_field2').style.display = 'none';
            document.getElementById('postal_code_field1').style.display = 'block';
            document.getElementById('postal_code_field2').style.display = 'block';
            document.getElementById('DOB_field1').style.display = 'none';
            document.getElementById('DOB_field2').style.display = 'none';

        }
        $(".screen_view").load(location.href + " .screen_view");

    }


     function validate_user(){
          var box1=document.getElementById("name");
          var letters = /^[A-Za-z]+$/;
          if((box1.value=="")){
                document.getElementById('n1').innerHTML="*name will not be empty";
                alert("Name cannot be empty");
                box1.focus();
                box1.style.border="solid 5px red";
                return false;
          }
          else if(!(box1.value.match(letters))){
            document.getElementById('n1').innerHTML="*Contains Only Character";
                alert("Contains Only Character");
                box1.focus();
                box1.style.border="solid 5px red";
                return false;
          }
          var box2=document.getElementById("email");
          if(box2.value==""){
                document.getElementById('e1').innerHTML="*email will not be empty";
                alert("email cannot be empty");
                box2.focus();
                box2.style.border="solid 5px red";
                return false;
          }
          var box3=document.getElementById("phone");
          if(box3.value=="" || isNaN(box3.value) ){
                document.getElementById('p1').innerHTML="*Enter phone Number";
                alert("Enter phone Number");
                box3.focus();
                box3.style.border="solid 5px red";
                return false;
          }
          var box4=document.getElementById("add");
          if(box4.value==""){
                document.getElementById('add1').innerHTML="*You Must Enter Address";
                alert("You Must Enter Address");
                box4.focus();
                box4.style.border="solid 5px red";
                return false;
          }
          var box5=document.getElementById("city");
          if(box5.value==""){
                document.getElementById('city1').innerHTML="*You Must Enter City";
                alert("You Must Enter City");
                box5.focus();
                box5.style.border="solid 5px red";
                return false;
          }
          var box6=document.getElementById("pcode");
          if(box6.value==""){
                document.getElementById('pcode1').innerHTML="*You Must Enter Postal Code";
                alert("You Must Enter Postal Code");
                box6.focus();
                box6.style.border="solid 5px red";
                return false;
          }
        return True;
     }
     function val_add(){
         var box1=document.getElementById("name");
          var letters = /^[A-Za-z]+$/;
          if((box1.value=="")){
                return false;
          }
          else if(!(box1.value.match(letters))){
                return false;
          }
          var box2=document.getElementById("email");
          if(box2.value==""){
                return false;
          }
          var box3=document.getElementById("phone");
          if(box3.value=="" || isNaN(box3.value) ){
                return false;
          }
          var box4=document.getElementById("add");
          if(box4.value==""){
                return false;
          }
          var box5=document.getElementById("city");
          if(box5.value==""){
                return false;
          }
          var box6=document.getElementById("pcode");
          if(box6.value==""){
                return false;
          }
        return true;
     }

     function validate_updateid() {
          var box1=document.getElementById("uniqueid");
          if(box1.value==""){
                document.getElementById('i1').innerHTML="*Enter ID";
                alert("ID cannot be empty");
                box1.focus();
                box1.style.border="solid 5px red";
                return false;
          }
     }
     function val_update(){
        var box1=document.getElementById("uniqueid");
          if(box1.value==""){
                return false;
          }
          return true;
     }

     function validate_deleteid(){
        var box2=document.getElementById("deleteid");
          if(box2.value==""){
                document.getElementById('del1').innerHTML="*Enter ID";
                alert("ID cannot be empty");
                box2.focus();
                box2.style.border="solid 5px red";
                return false;
          }
          return true;
     }
     function val_delete(){
        var box2=document.getElementById("deleteid");
          if(box2.value==""){
                return false;
          }
          return true;
     }

     $(document).ready(function(){
        var e0 = $(document).find('.screen_data_home');
        var s1 = $(document).find('.screen_home').html();
        e0.html(s1);
        location.hash = '/'+'home';
        $(document).on('click', '.button_menu', function(event)
        {
            event.preventDefault();
            var screen_name = $(this).attr('screen_name');
            location.hash = '/'+screen_name;
            if(screen_name == "home"){
                var e0 = $(document).find('.screen_data_home');
                var s1 = $(document).find('.screen_home').html();
                e0.html(s1);
            }
            else if(screen_name == "add"){
                var e0 = $(document).find('.screen_data_home');
                var s1 = $(document).find('.screen_add').html();
                e0.html(s1);
                event.preventDefault();
            }
            else if(screen_name == "update"){
                var e0 = $(document).find('.screen_data_home');
                var s1 = $(document).find('.screen_update').html();
                e0.html(s1);

            }
            else if(screen_name == "view"){
                var e0 = $(document).find('.screen_data_home');
                var s1 = $(document).find('.screen_view').html();
                e0.html(s1);
                $(".screen_view").load(location.href + " .screen_view");
            }
            else if(screen_name == "delete"){
                var e0 = $(document).find('.screen_data_home');
                var s1 = $(document).find('.screen_delete').html();
                e0.html(s1);
            }
        })
})

$(document).on('submit','#add_details_form',function(e)
{
       x = val_add();
       if (x == true){
              e.preventDefault();
               var name = $('#name').val();
               var email = $('#email').val();
               var gender = $("input[type=radio][name=gender]:checked").val();
               var doj = $('#doj').val();
               var dob = $('#dob').val();
               var add = $('#add').val();
               var city = $('#city').val();
               var pcode = $('#pcode').val();
               var phone = $('#phone').val();

              $.ajax({
                type:'POST',
                url: '/add',
                data:{
                  name:name,email:email,doj:doj,dob:dob,add:add,city:city,pcode:pcode,gender:gender,phone:phone
                },
                success:function(response)
                {
                  alert(response);
                }
              })
       }
});


$(document).on('submit','#delete_details_form',function(e)
{
      x = val_delete();
      if (x == true){
          e.preventDefault();

           var id = $('#delete_id').val();

          $.ajax({
            type:'POST',
            url: '/delete',
            data:{
              id:id
            },
            success:function(response)
            {
              alert(response);
            },
            error: function() {
                alert('ID Value Cannot exist');
            }
          })

      }


});

$(document).on('submit','#update_details_form',function(e)
    {
      x = val_update();
      if (x == true)
      {
           e.preventDefault();
           var id = $('#uniqueid').val();
           var field=$('#f1').val();
           var gender = $("input[type=radio][name=gender]:checked").val();
           var name = $('#name_field2').val();
           var email = $('#email_field2').val();
           var doj = $('#date_of_joining_field2').val();
           var dob = $('#DOB_field2').val();
           var add = $('#street_address_field2').val();
           var city = $('#city_field2').val();
           var pcode = $('#postal_code_field2').val();
           var phone = $('#phone_field2').val();

          $.ajax({
            type:'POST',
            url: '/update_records',
            data:{
              id:id, field:field, name:name, email:email, doj:doj, dob:dob, add:add, city:city, pcode:pcode, gender:gender, phone:phone
            },
            success:function(response)
            {
              alert(response);
            }
          })
      }
    });

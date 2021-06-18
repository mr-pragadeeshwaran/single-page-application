
    function initiate_update_field(){
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

    field_arr = ['name_field1','name_field2','email_field1','email_field2','date_of_joining_field1','date_of_joining_field2',
    'gender_field1','gender_field2','DOB_field1','street_address_field1','street_address_field2','city_field1','city_field2',
    'phone_field1','phone_field2','postal_code_field1','postal_code_field2'];

    function show_update_field_box(){

        var x=document.getElementById('f1');

            for(let i=0;i<field_arr.length;i++){
                 document.getElementById(field_arr[i]).style.display = 'none';
            }
            document.getElementById(`${x.value}_field1`).style.display = 'block';
            document.getElementById(`${x.value}_field2`).style.display = 'block';

        $(".screen_view").load(location.href + " .screen_view");

    }

    function show_alert_to_user(id,field,box1){
                    document.getElementById(id).innerHTML="*"+field+" will not be empty";
                    alert(field+" cannot be empty");
                    box1.focus();
                    box1.style.border="solid 5px red";
                    return false;
    }
    function validate_user(){
          var box1=document.getElementById("name");
          var box2=document.getElementById("email");
          var box3=document.getElementById("phone");
          var box4=document.getElementById("add");
          var box6=document.getElementById("pcode");
          var box5=document.getElementById("city");
          var letters = /^[A-Za-z]+$/;
          var result = true;

          if((box1.value=="")){
                return show_alert_to_user("n1","name",box1);
          }
          else if(!(box1.value.match(letters))){
            document.getElementById('n1').innerHTML="*Contains Only Character";
                alert("Contains Only Character");
                box1.focus();
                box1.style.border="solid 5px red";
                return false;
          }
          if(box2.value==""){
                return show_alert_to_user("e1","email",box2);
          }
          if(box3.value=="" || isNaN(box3.value) ){
                document.getElementById('p1').innerHTML="*Enter phone Number";
                alert("Enter phone Number");
                box3.focus();
                box3.style.border="solid 5px red";
                return false;
          }
          if(box4.value==""){
                return show_alert_to_user("add1","Address",box4);
          }
          if(box5.value==""){
                return show_alert_to_user("city1","City",box5);
          }
          if(box6.value==""){
                return show_alert_to_user("pcode1","Postal Code",box6);
          }
        return True;
     }

    function val_add(){
         var box1=document.getElementById("name");
         var box2=document.getElementById("email");
         var box3=document.getElementById("phone");
         var box4=document.getElementById("add");
         var box5=document.getElementById("city");
         var box6=document.getElementById("pcode");
         var letters = /^[A-Za-z]+$/;

         if(!(box1.value.match(letters))){
                return false;
         }
         if( (isNaN(box3.value)) || (box3.value=="") || (box4.value=="") || (box5.value=="") || (box6.value=="") || (box2.value=="") || (box1.value=="")){
                return false;
         }
       return true;
    }
    function val_update(){
        var box1=document.getElementById("uniqueid");
          if(box1.value==""){
                return false;
          }
          return true;
     }
    function val_delete(){
        var box2=document.getElementById("delete_id");
          if(box2.value==""){
                return false;
          }
          return true;
     }

    function validate_updateid() {
          var box1=document.getElementById("uniqueid");
          if(box1.value==""){
                return show_alert_to_user('i1','ID',box1);
          }
          return true;
     }
    function validate_delete_id(){
        var box2=document.getElementById("delete_id");
          if(box2.value==""){
               return show_alert_to_user('del1','ID',box2);
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



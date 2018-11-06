$(document).ready(function () {
$('#namesignup').on('keyup', function() {
    $.get('/usercheck?username='+$('#namesignup').val().toLowerCase(), function(response) {
    document.getElementById("nameerror").innerHTML = "***"+  response.message;
    if (response.message == "user exists"){
        alert('hello')
        $('#nameerror').show();
        $('#submitcreate').attr('disabled',true);
    }
    else
    {
        $('#nameerror').hide();
        document.getElementById("nameerror").innerHTML = "*****Don't leave the field empty";
        $('#submitcreate').removeAttr('disabled');
    }
    });
});
$('#signupform').on('submit', function (e) {
    password = $('#passwordsignup').val();
    confirmpassword = $('#confirmpasswordsignup').val();
    name = $('#namesignup').val();
    done=true;
    console.log(password +'  ' + confirmpassword);

    if( password !=confirmpassword || name.length == 0){
        if(password !=confirmpassword)
        $('#passworderror').show();
        if(name.length==0)
        $('#nameerror').show();
        e.preventDefault();
        done=false;
    }
    else
        alert('Successfully created user. Please login to proceed');
    }); 
});
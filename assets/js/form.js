$( document ).ready(function() {
    console.log( "ready!" );
    submitForm()
});

function submitForm(){
$('.submitBtn').on('click',function(e){
    console.log('clicked')
    var userName = $('input#name').val()
    var email = $('input#email').val()
    var message = $('textarea#msg').val()
    var subject = $('input#subject').val()
    $.ajax({
        method: 'POST',
        url: 'https://formsubmit.co/ajax/naqash2200@gmail.com',
        dataType: 'json',
        accepts: 'application/json',
        data: {
            name: userName,
            message: message,
            email:email,
            subject:subject
        },
        success: (data) => console.log(data),
        error: (err) => console.log(err)
    });
})

   
}
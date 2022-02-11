document.getElementById('submitBtn').addEventListener('click',function(){
    const emailField = document.getElementById('emailAddress');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('password');
    const password = passwordField.value;

    if(userEmail == 'admin@gmail.com' && password == '123456'){
        window.location.href = 'bank.html';
    }
    else{
        const alert = document.getElementById('alert');
        alert.classList.add('show');

        password = '';
        userEmail = '';
    }
})
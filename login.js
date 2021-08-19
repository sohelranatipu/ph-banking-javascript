document.getElementById('login_btn').addEventListener('click',function(){
    const login_email = document.getElementById('login_email');
    const login_pass = document.getElementById('login_pass');
    if(login_email.value == 'baap@gmail.com' && login_pass.value == 'secret'){
        window.location.href = 'banking.html';
    }
    
})
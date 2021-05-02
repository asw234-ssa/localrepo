console.log("script running");
const formBody = document.getElementById('form-body')
const email = document.getElementById('email')
const password = document.getElementById('password')
const button = document.getElementById('btn')


function showForm(){
    setTimeout(()=>{
        formBody.style.visibility = 'visible';
    },1500)
}

showForm();



const name=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password");
const number=document.getElementById("number");
const form=document.getElementById("form");
const errorElement=document.getElementById('error')

form.addEventListener('submit',(e)=>{
    let messages=[]
    if(name.value.length<2) 
    {
        messages.push('Name must be longer than one character');
    }   
    if(number.value.length<10)
    {
        messages.push("mobile number must be equal to 10 digits");
    }


    if(password.value.length<6)
    {
        messages.push("password must be longer than 6 character");
    }



    if(messages.length>0)
    {
        e.preventDefault()
        errorElement.innerText=messages.join(', ')
    }
  
})
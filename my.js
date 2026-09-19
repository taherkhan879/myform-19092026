let form=document.getElementById("myform")
let nameE=document.getElementById("name")
let emailE=document.getElementById("email")
let nameErrms=document.getElementById("nameerrmsg")
let emailErrms=document.getElementById("emilerrmsg")


form.addEventListener("submit",function(event){
    console.log("submitted")
    event.preventDefault()
})
nameE.addEventListener("blur",function(){
    if(event.target.value===""){
        nameErrms.textContent="requried";
    }else{
        nameErrms.textContent="";
    }
    console.log("blur triggred")
})
emailE.addEventListener("blur",function(){
     if(event.target.value===""){
        emailErrms.textContent="requried";
    }else{
        nameErrms.textContent="";
    }
    console.log("blur triggred")
})

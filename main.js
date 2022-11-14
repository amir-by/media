 
{ //cacl area of circle 
  const total = document.querySelector("#total");
  const input = document.querySelector("input");
   const func = () => {
   return 3.14* (input.value**2)
 }
 
 
 input.addEventListener('change', () => {
     total.innerHTML= `<h3 class='text-warning' >the area is : ${func()} </h3>`
   
 }
 )
 }

{ //date()
 const date_ = document.querySelector(".date_");
 const now = new Date()
 
 let month;
 
 switch (now.getMonth()) {
  case 0:
    month ='Janvier'
    break;
  case 2:
    month ='fev '
    break;
  case 3:
    month ='mars '
    break;
  case 4:
    month ='mai '
    break;
  case 5:
    month ='juilet '
    break;
  case 6:
    month ='july '
    break;
  case 7:
    month ='aout '
    break;
  case 8:
    month ='sept '
    break;
  case 9:
    month ='oct '
    break;
  case 10:
    month ='nov'
    break;
 
  default:
    console.log('error')
    break;
 }

 date_.innerText=`Date is : ${month} `
}
{//Time app et time utc maroc
 const date_ = document.querySelector(".dat_");

function func() {
  let time = new Date() 

let h = time.getUTCHours()+1
let m = time.getMinutes()
let s = time.getSeconds()
 
 if(s<10){
    s = `0${s}`
 }
 if(m<10){
    m = `0${m}`
 }
 if(h<10){
    h = `0${h}`
 }
date_.innerText=` ${h} : ${m} : ${s}`
}
setInterval( func, 1000)
}


{// regex  .test(input.value) and img.setAttribute('src','./path')
 const data_ = document.querySelector('.reg')
 const inputReg = document.querySelector('.ipt')
 const img1 = document.querySelector('.im')
   
 //Validate email address using REGEX 
function validateEmail(elementValue){      
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   return emailPattern.test(elementValue); 
 } 
function validatePassword(elementValue){      
   var emailPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
   return emailPattern.test(elementValue); 
 } 

 

 inputReg.addEventListener('keyup', (e) => {
    if (validateEmail(inputReg.value)) {
      inputReg.classList.add('success')
      inputReg.classList.remove('error')
      img1.setAttribute('src',"./assets/good.jpg")
      
     } else {
      inputReg.classList.add('error')
      inputReg.classList.remove('success')
      img1.setAttribute('src',"./assets/fail.jpg")

     }
 }
 )
 }

const parent = document.querySelector('.papa')
  document.removeChild("parent")
 document.createElement('div')
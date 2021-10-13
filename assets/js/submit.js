function incCount(a, plus) {
    var number = plus.previousElementSibling;
    var val = parseInt(number.value, 10);
    if (isNaN(val))
        val=0;
    val++;
    number.value = val;
  }
  
  function decCount(a, minus) {
    var number = minus.nextElementSibling;
    var val = parseInt(number.value, 10);
    if (val > 1) {
        if (isNaN(val))
            val=0;
      val--;
      number.value = val;
    }
  }

let btnOrder=document.querySelector("#btnOrder")
btnOrder.addEventListener('click',function(e){
    let flag=true;
    let txtOrder=document.querySelector("#txtOrder");
    if(txtOrder.value.length==0){
        flag=false;
        alert("Name CAN'T be empty");
    }
    let PhoneOrder=document.querySelector("#PhoneOrder")
    let flagg=true;
    let flaggg=true;
    if(PhoneOrder.value.length==0){
        flagg=false;
        alert("Phone Number CAN'T be empty");
    }else{
        let len=PhoneOrder.value.length
        if (len<=6 || len>15) {
            flagg=false;
            alert("Invalid Phone Number");
        }
        for(let i=0;i<PhoneOrder.value.length; i++){
            if(!(PhoneOrder.value[i]>=0&&PhoneOrder.value[i]<=9)){
                flaggg=false;
            } 
        }
        if(flaggg==false){
            alert("Phone Number must contain NUMBER ONLY!")
        }
    }

    let rbGender=document.querySelectorAll("#rbGender");
    let genderflag=false;

    rbGender.forEach(function(rb) {
        if(rb.checked){
            genderflag=true;
        }
    });
    if(!genderflag){
        alert("Gender must be filled");
    }

    let city=document.querySelector("#slcCity");

    let flagcity =true
    if(city.value==0){
        flagcity=false;
    }
    if(!flagcity){
        alert("City must be choosen")
    }

    let areaflag=true;
    let addressOrd=document.querySelector("#address");
    if(addressOrd.value.length==0){
        areaflag=false;
        alert("Address CAN'T be empty");
    }

    if(areaflag && flagcity && genderflag &&flag &&flagg && flaggg){
        location.href="../reserve.html"
    }
})
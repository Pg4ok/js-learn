'use strict'



window.onload=()=>{
    console.log('start -> OK')
     let button = document.getElementById('start-btn');
     button.onclick=()=>{
        console.log('start-btn => click');

       /* alert('hi,JavaScript');
        let userName=prompt('Who are you?');
        alert('Welcome, ' + userName);*/
        //let task =prompt("Cin First Znam: ");
        let ekzA=prompt("Cin First Znam without (x^2): ");
        let ekzB=prompt("Cin Second Znam without (x),but with знаком + или -: ");
        let ekzC=prompt("Cin Third Znam,but with знаком + или -: ");
        alert("It` right: \" " + ekzA+"x^2"+ekzB+"x"+ekzC + "\" ?");
        let discr=(ekzB*ekzB)-(4*ekzA*ekzC);
        if(discr<0){
         alert("Не имеет рeшений");
         alert('Discriminant = ' + discr);
        }
       // else{
         let x1=((-ekzB+Math.sqrt(discr)) / (2*ekzA));
         let x2=((-ekzB-Math.sqrt(discr)) / (2*ekzA));
        alert('x1= '+x1+'     x2='+x2);
      //  }
         
        /*let res=eval(task);
        alert('res= ' + res);*/
     }
}
'use strict'

window.onload=()=>{
    console.log('script->start')

    let a=0.0;
    let b=0.0;
    let c=0.0;
    

    let sideA=document.querySelector('#side_A');
    let sideB=document.querySelector('#side_B');
    let sideC=document.querySelector('#side_C');

    let btn1=document.querySelector('#btn-1');
    let btn2=document.querySelector('#btn-2');
    let res=document.querySelector('#result');

    



    btn1.onclick=(event)=>{
    event.preventDefault();
    a=sideA.value;
    b=sideB.value;
    c=sideC.value;
    console.log(a);
    console.log(b);
    console.log(c);
        let p=0.0;
        p=a+b+c;
        console.log(p);
        let t1=p-a;
        console.log('t1= '+t1);
        let t2=p-b;
        console.log('t2= '+t2);
        let t3=p-c;
        console.log('t3='+t3);
       
        let r=p*t1*t2*t3;
        console.log('r='+r);
        res.innerText=Math.sqrt(r);
    }
}
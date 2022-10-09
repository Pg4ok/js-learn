'use strict'

window.onload=()=>{
    console.log('script -> start');

    let mainBox=document.getElementById('main-box');
    let stopBtn=document.getElementById('stop-btn');
    let startBtn=document.getElementById('start-btn');

    const tickFunc=()=>{
        let now = new Date();
        mainBox.innerHTML=now.toLocaleTimeString();
    };

    let timer=null;

   startBtn.onclick=()=>{
        console.log('startbtn->click');
        timer=setInterval(tickFunc,1000);
    };
    stopBtn.onclick=()=>{
        console.log('stopbtn->click');
        clearInterval(timer);
        alert('Timer-stop')
    };
};
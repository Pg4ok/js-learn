'use strickt';

window.addEventListener('load',()=>{

let mainbox=document.querySelector('#m_box');
/*function displayObj(obj){

}*/

const  displayObj=(obj)=>{
    for(let index of arr1){
        mainbox.innerHTML+=`<br>${prop} -> ${obj[prop]}`;

    }
};

mainbox.innerHTML+='<h3>By Inicilations</h3>';


})
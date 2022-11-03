import { Controller } from "./libs.js";



$(document).ready(()=>{

    console.log('jQuery->Ok');

    const controller=new Controller();
    $('#load-btn').click(()=>{
        console.log('load-btn->click')
        controller.loadData();
    });
    $('#reset-btn').click(()=>{
        console.log('reset-btn->click')
        controller.resetData();
    });
})
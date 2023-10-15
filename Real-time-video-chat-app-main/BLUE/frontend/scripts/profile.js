let EditText = document.querySelectorAll('.EditText');

let textEditor = document.querySelector('.text-editor');

let exitTxt  = document.querySelector('.exit-txt');

let canselTxt = document.getElementById('canselTxt');

EditText.forEach((el) =>{
    el.addEventListener('click' , ()=>{
        textEditor.style['display'] = 'block';
    });
});


exitTxt.addEventListener('click' , ()=>{
    textEditor.style['display'] = 'none';
});

canselTxt.addEventListener('click' , ()=>{
    textEditor.style['display'] = 'none';
});


/*--  serveices */
let EditSer = document.querySelectorAll('.EditSer');

let serviceEditor = document.querySelector('.service-editor');

let exitSer = document.querySelector('.exit-ser');

let canselSer = document.getElementById('canselSer');

EditSer.forEach((el) =>{
    el.addEventListener('click' , ()=>{
        serviceEditor.style['display'] = 'block';
    });
});

exitSer.addEventListener('click' , ()=>{
    serviceEditor.style['display'] = 'none';
});
canselSer.addEventListener('click' , ()=>{
    serviceEditor.style['display'] = 'none';
});


/*--  serveices */
let  EditPro = document.querySelectorAll('.EditPro');

let projectEditor = document.querySelector('.project-editor');

let exitPro = document.querySelector('.exit-pro');

let canselPro = document.getElementById('canselPro');

EditPro.forEach((el) =>{
    el.addEventListener('click' , ()=>{
        projectEditor.style['display'] = 'block';
    });
});

exitPro.addEventListener('click' , ()=>{
    projectEditor.style['display'] = 'none';
});
canselPro.addEventListener('click' , ()=>{
    projectEditor.style['display'] = 'none';
});


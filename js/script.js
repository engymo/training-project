// save all field input in local storage...
let levels = document.getElementById('levels');
let lesone = document.getElementById('lesone');
let language = document.getElementById('language');
let date = document.getElementById('date');
let duration = document.getElementById('duration');
let certificate = document.getElementById('certificate');
let textaerea = document.getElementById('Textarea');
let btn = document.querySelector('.btn')


btn.addEventListener('click',function(){
    localStorage.setItem('levels', levels.value);
    localStorage.setItem('lesone', lesone.value);
    localStorage.setItem('date', date.value);
    localStorage.setItem('duration', duration.value);
    localStorage.setItem('certificate', certificate.value);
    localStorage.setItem('language', language.value);
    localStorage.setItem('Textarea', textaerea.value);
}
);


   


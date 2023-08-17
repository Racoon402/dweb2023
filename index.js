

var a=document.querySelector('button');
let plag=0;

a.addEventListener('click',function(){
    var lists = document.querySelector('ul');

    if(plag===0){
        lists.classList.remove('position-absolute');
        plag=1;
    }
    else{
        lists.classList.add('position-absolute');
        plag=0;    
    }
})
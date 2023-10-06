const main=document.getElementById('container');
const crsr=document.querySelector('#container #cursor');

main.addEventListener('mousemove',(e)=>{
    console.log('hii');
    crsr.style.left=e.x+'px';
    crsr.style.top=e.y+'px';
})

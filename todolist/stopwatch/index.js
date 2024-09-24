async function time(){
return setTimeout(() => {
    
}, 1000);


}
document.addEventListener('DOMContentLoaded',()=>{
    let value=10;
    let seconds=0;
    let seconds_first=document.querySelector('#seconds_first');
    let seconds_second=document.querySelector('#seconds_second');
    let minutes_first=document.querySelector('#minutes_first');
    let minutes_second=document.querySelector('#minutes_second');
    let hours_first=document.querySelector('#hours_first');
    let hours_second=document.querySelector('#hours_second');
    document.querySelector(".start").addEventListener('click', async ()=>{

        for(let i=0;i<=5;i++){
            for (let j=0;j<10;j++){
                
            await time();
            seconds_second.innerText=j;
                
            }
            seconds_first.innerText=i;
        }

    });
    document.querySelector('.reset').addEventListener('click',()=>{
        seconds_first.innerText=0;
        seconds_second.innerText=0;
        hours_first.innerText=0;
        hours_second.innerText=0;
        minutes_first.innerText=0;
        minutes_second.innerText=0;

    })
})
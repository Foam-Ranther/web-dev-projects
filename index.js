document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('form').addEventListener('submit',(event) => {
        event.preventDefault();
        let input=document.querySelector('#currency');
        let amount=document.querySelector('#amount');
        let response=fetch("https://api.exchangeratesapi.io/latest?base=USD&access_key=c6674def7cb892bb749070a773461e76").then((response)=>{

            return response.json();
        }).then((data)=>{
            const rate=data.rates[input.value.toUpperCase()];
            if (rate===undefined){
                document.querySelector('#rates').innerHTML=`Invalid Currency`;
                
            }
            else{
                let final_value=rate*amount.value
                document.querySelector('#rates').innerHTML=`1 USD is equal to ${final_value}`;
            }
            input.value="";
            amount.value="";
            
        }).catch((error)=>{
            alert(`error ${error}`);
            
        })
        
        
    }
    )


var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
       icon.src = "sunny.png"; 
    }
    else{
        icon.src = "moon.png";
    }
    
        
    
}
})


document.addEventListener('DOMContentLoaded',()=>{
    let input=document.querySelector('#input_val');
    
    document.querySelector('#in_form').addEventListener('submit',(event)=>{
        event.preventDefault();
        console.log(`input value : ${input.value}`)
        let element=document.createElement('div');
        element.classList.add('task');
        element.innerHTML=`
                <form  id ="form" class="first">
                    <input value="${input.value}" type="text">
                </form>
            
            <div class="second">
                <button class="button">Edit</button>
                <button class="button">Delete</button>
            </div>`;
        document.querySelector('.tasks_list').append(element);
    })
});
document.addEventListener('DOMContentLoaded',()=>{
    let input=document.querySelector('#input_val');
   
    
    document.querySelector('#in_form').addEventListener('submit',(event)=>{
        console.log('value :',input.value);
        if (input.value=="yash"){
            alert('you cannot leave the input empty');
            return;
        }
        event.preventDefault();
        console.log(`input value : ${input.value}`)
        let element=document.createElement('div');
        element.classList.add('task');
        element.innerHTML=`
                <form  id ="form" class="first">
                    <input class="editable_input" value="${input.value}" disabled type="text">
                </form>
            
            <div class="second">
                <button class="button edit">Edit</button>
                <button class="button delete">Delete</button>
            </div>`;

        document.querySelector('.tasks_list').append(element);

        let edit_btn=element.querySelector('.edit');
        let delete_btn=element.querySelector('.delete');
        let editable_input=element.querySelector('.editable_input');
        delete_btn.addEventListener('click',()=>{
            element.remove();
        })
        edit_btn.addEventListener('click',()=>{
            console.log('Edit butoon value ',edit_btn.innerText);
            if (edit_btn.innerText=='Edit'){
                console.log('edit is functioning');
                editable_input.removeAttribute('disabled');
                edit_btn.innerText="Save"
            }
            else{
                console.log('save is functioning');
                editable_input.setAttribute('disabled',"");
                edit_btn.innerText="Edit"
            }
        })
        input.value="";
    })
});


// document.addEventListener('DOMContentLoaded', () => {
//     let input = document.querySelector('#input_val');

//     document.querySelector('#in_form').addEventListener('submit', (event) => {
//         event.preventDefault();
//         console.log(`input value : ${input.value}`);
//         let element = document.createElement('div');
//         element.classList.add('task');
//         element.innerHTML = `
//             <form id="form" class="first">
//                 <input class="editable_input" value="${input.value}" disabled type="text">
//             </form>
//             <div class="second">
//                 <button class="button edit">Edit</button>
//                 <button class="button delete">Delete</button>
//             </div>`;

//         document.querySelector('.tasks_list').append(element);

//         // Add event listeners to the new task
//         addTaskEventListeners(element);
//     });

//     function addTaskEventListeners(taskElement) {
//         let edit_btn = taskElement.querySelector('.edit');
//         let delete_btn = taskElement.querySelector('.delete');
//         let editable_input = taskElement.querySelector('.editable_input');

//         delete_btn.addEventListener('click', () => {
//             taskElement.remove();
//         });

//         edit_btn.addEventListener('click', () => {
//             console.log('Edit button value ', edit_btn.innerText);
//             if (edit_btn.innerText == 'Edit') {
//                 console.log('edit is functioning');
//                 editable_input.removeAttribute('disabled');
//                 edit_btn.innerText = "Save";
//             } else {
//                 console.log('save is functioning');
//                 editable_input.setAttribute('disabled', "");
//                 edit_btn.innerText = "Edit";
//             }
//         });
//     }
// });

const userinput = document.querySelector('#task');
const button = document.querySelector('#btn');
const tasklist = document.querySelector('#task-list')
const btnn = document.createElement('button')

button.addEventListener('click',(e)=>{    
    e.preventDefault();

    const task = userinput.value
    if(task === ""){
        alert('Please Enter some task')
    }else{
        const li = document.createElement('li')
        userinput.value = '';
        li.innerHTML = `${task}`
        
        // creating a delete button
        const deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        
        deleteBtn.onclick = function(){
            li.remove();
        };
        // .appendChild(deleteBtn);

        tasklist.appendChild(li).appendChild(deleteBtn)
        userinput.value = '';

    }
    
})
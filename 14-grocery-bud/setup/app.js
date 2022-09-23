// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.getElementById('grocery')//input
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')
// edit option
let editElement;
let editFlag = false;
let editId = '';
// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem)
clearBtn.addEventListener('click',clearItems)
// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    const value = grocery.value
    const id = new Date().getTime().toString() 
    if (value && !editFlag){
        const element = document.createElement('article');
        // add class
        element.classList.add('grocery-item')
        // add id 
        const attr = document.createAttribute('data-id')
        attr.value = id
        element.setAttributeNode(attr)
        element.innerHTML = `<p class="title"> ${value} </p>
        <div class="btn-container">
          <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
          </button>
        </div>`
        const deleteBtn = element.querySelector('.delete-btn')
        const editBtn = element.querySelector('.edit-btn')
        deleteBtn.addEventListener('click', deleteItem)
        editBtn.addEventListener('click', editItem)
        list.appendChild(element)
        displayAlert('grocery item has been added successfully', 'success')
        container.classList.add('show-container')
        addToLacalStorage(id,value)
        setBackToDefault()
    }else if (value && editFlag){
        console.log('editin')
    }else{
        displayAlert('please enter value', 'danger')
    }
}

//display alert
function displayAlert(text,action){
    alert.textContent = text
    alert.classList.add(`alert-${action}`)
    // remove alert
    setTimeout(function(){
        alert.textContent = ''
        alert.classList.remove(`alert-${action}`)
    },3000)
}
// clear items
function clearItems(){
    const items = document.querySelectorAll('.grocery-items')
    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item)
        })
    }
    container.classList.remove("show-container")
    displayAlert('empty list', 'danger')
    //localStorage.removeItem('list'grov)
}
// delete function
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement
    const id = element.dataset.id
    list.removeChild(element)
    displayAlert('item has been removed','success')
    console.log(list.children.length)
    if (list.children.length === 0) {
        container.classList.remove("show-container")
    }
    setBackToDefault();
    //remove from local storage
    removeFromLocalStorage(id);
}
function editItem(){
    console.log('edit item')
}
// set back to default 
function setBackToDefault(){
    grocery.value = "";
    editFlag = false;
    editId = '';
    submitBtn.textContent = "submit";
}
// ****** LOCAL STORAGE **********
function addToLacalStorage(id,value){
    console.log(" added to local storage")
}

function removeFromLocalStorage(id){

}
// ****** SETUP ITEMS **********

let addBtn = document.getElementById('add-btn');
let parentList = document.getElementById('parentList');
addBtn.addEventListener('click', addMovie);
let count = 0;

function addMovie(e){
    count++;
    let currBtn = e.currentTarget;
    let btnParent = currBtn.parentElement;
    let currBtnInput = btnParent.previousElementSibling
    let movieName = currBtnInput.value;
    if (movieName == ''){
        movieName = 'Untitled ' + count
    }
    if (parentList.firstElementChild.textContent == "No Movies Added. Add Now!!"){
            parentList.firstElementChild.remove();   
    }

    
    

        let newMovie = document.createElement('li');
        
        newMovie.className = 'list-group-item bold d-flex justify-content-center align-items-center';
        newMovie.innerHTML =             `<p class="flex-grow-1">${movieName}</p>
        <button class="btn btn-warning mx-2" onclick="editMovie(this)">Edit</button>
        <button class="btn btn-danger" id="remove-btn" onclick="removeMovie(this)">Remove</button>`
        
        parentList.appendChild(newMovie)
        
        currBtnInput.value = "";
    }

    

        



let removeBtn = document.getElementById('remove-btn');


function removeMovie(currItem){

    let deleteItem = currItem.parentElement;
    deleteItem.remove()

    if (parentList.children.length <= 0){
        let newEmptyMsg = document.createElement('p');
        newEmptyMsg.className = "list-group-item bold"
        newEmptyMsg.textContent = 'No Movies Added. Add Now!!';
        parentList.appendChild(newEmptyMsg);
    }

}

function editMovie(currElement) {
    if (currElement.textContent == "Edit"){
        movieName = currElement.previousElementSibling.textContent;
        let newInput = document.createElement('input');
        newInput.className = 'form-control'
        newInput.placeholder = 'Edit Movie'
        newInput.type = 'text';
        newInput.value = movieName;
    
        let btnParent = currElement.parentElement;
        btnParent.replaceChild(newInput,currElement.previousElementSibling)
    
        currElement.textContent = "Done"

    }else if (currElement.textContent == "Done") {
        let newMovieName = currElement.previousElementSibling.value;
        let movieName = document.createElement('p');
        movieName.className = "flex-grow-1";
        movieName.textContent = newMovieName;

        let btnParent = currElement.parentElement;
        btnParent.replaceChild(movieName,currElement.previousElementSibling)
        
        currElement.textContent = "Edit"



    }



}
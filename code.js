let myLibrary = [];
let count = 0;
function Book(name,author,pages,read_status,id) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read_status = read_status;
  this.id = id;
}

const table = document.querySelector('tbody');
function addBookToLibrary(name,author,pages,read_status,id) {
    const book = new Book(name,author,pages,read_status,id);
    myLibrary.push(book);
    count++;
}

const id = 0;
const add_book = document.querySelector('#add_book');
const new_book = document.querySelector('#new_book');
const form = document.querySelector('form');
new_book.addEventListener('click',()=>{
    if(form.style.visibility == 'hidden')
    form.style.visibility = 'visible';
    else form.style.visibility = 'hidden';
})

const submit = document.querySelector("input[type='submit']");
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    const name = document.querySelector('input[placeholder="Name"]').value;
    const author = document.querySelector('input[placeholder="Author"]').value;
    const pages = document.querySelector('input[placeholder="Pages"]').value;
    if(name.length == 0 || author.length == 0 || pages < 1)
    return;
    const read_cell = document.createElement('td');
    const read = document.createElement('input');
    read.setAttribute('type','checkbox');
    read.checked = document.querySelector('#read_book').checked;
    const book_id = count;
    read.setAttribute('id',book_id);

    addBookToLibrary(name,author,pages,read.checked,book_id);

    const row = document.createElement('tr');
    [name,author,pages].forEach((ele)=>{
        const cell = document.createElement('td');
        cell.textContent = ele;
        row.appendChild(cell); 
    });
    read_cell.appendChild(read);
    row.appendChild(read_cell);
    

    read.addEventListener('click',()=>{
        const i = myLibrary.findIndex(ele => {
            return read.getAttribute('id') == ele.id});

        
        myLibrary[i].read_status = read.checked;
    })

    const del_cell = document.createElement('td');
    const del_book = document.createElement('button');
    del_book.textContent = 'X';
    del_book.addEventListener('click',()=>{
        table.removeChild(row);
        myLibrary = myLibrary.filter((ob)=>
         ob.id == book_id
        )
    })
    del_cell.appendChild(del_book);
    row.appendChild(del_cell);
    table.appendChild(row);
    
})





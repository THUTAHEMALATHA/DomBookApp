const IMAGE_URL = "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg";
if(i > -1){
books.splice(i,1);
renderBooks();
}
function sortBooks(){
books.sort((a,b) => {
const A = a.title.toLowerCase();
const B = b.title.toLowerCase();
if(A < B) return sortAZ ? -1 : 1;
if(A > B) return sortAZ ? 1 : -1;
return 0;
});
}
form.addEventListener('submit', (e) => {
e.preventDefault();
const title = document.getElementById('title').value;
const author = document.getElementById('author').value;
const category = document.getElementById('category').value;


if(!title.trim() || !author.trim()) return;


const book = createBookObject(title, author, category);
books.push(book);
sortBooks();
renderBooks();
form.reset();
});
sortBtn.addEventListener('click', () => {
sortAZ = !sortAZ;
sortBtn.textContent = sortAZ ? 'Sort by Title A → Z' : 'Sort by Title Z → A';
sortBooks();
renderBooks();
});
filterSelect.addEventListener('change', () => {
renderBooks();
});
renderBooks();
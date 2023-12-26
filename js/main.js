var siteBook = document.getElementById("siteBook");
var siteUrl = document.getElementById("siteUrl");

var bookList  ;
if(localStorage.getItem("bookList")==null){
    bookList =[];
}
else{
    bookList=JSON.parse(localStorage.getItem("bookList"));
}



function addBook(){
var book = {
siteBook : siteBook.value,
siteUrl :siteUrl.value,
}

bookList.push(book);
localStorage.setItem("bookList",JSON.stringify(bookList));
displayBook();
clearList();
console.log(book);
}

function clearList() {
    siteBook.value="";
    siteUrl.value="";

}


function displayBook(){
    var list =" ";
    for(var i=0 ; i<bookList.length ; i++){
        list += `
        <tr>
        <td>${bookList[i].siteBook}</td>
        <td>${bookList[i].siteUrl}</td>
        
        <td><button onclick="visitSite()" class="btn btn-danger"> Visit </button></td>
        <td><button onclick="deleteBook (${i})" class="btn btn-info"> Delete </button></td>
            </tr>
            `
    }
    document.getElementById("bookList").innerHTML = list ;

}

function deleteBook (index) {


    bookList.splice(index,1);
    console.log(bookList);
    displayBook();


}

var nameRegex = /^[A-Za-z_]$/
function nameValid(){
    if(nameValid.test(siteBook.value) ){
return true;   }
else{
    return false;
}
    }


var urlCheck =/^(https:\/\)?(www\.)?[A-za-z0-9_\.]{1,}\.[a-z]{3}$/
function urlValid (){
    if(urlCheck.test(siteUrl.value) ){
return true;   }
else{
    return false;
}
    }

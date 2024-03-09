const inputBox = document.getElementById("input-box");
const listContaier = document.getElementById("list-container");

function addTask() {
    if(inputBox.value===''){
        alert('You must write something');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContaier.appendChild(li); //display karne k liye
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
    }
    listContaier.addEventListener("click" ,function(e){
        if(e.target.tagName.toLowerCase()==="li"){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName.toLowerCase()==="span"){
            e.target.parentElement.remove();
            saveData();

        }
    },false);

    function saveData() {
        localStorage.setItem("data",listContaier.innerHTML);
    }
    function showTask(){
        listContaier.innerHTML=localStorage.getItem("data");
    }
    showTask();
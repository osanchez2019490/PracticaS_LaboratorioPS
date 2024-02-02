document.addEventListener("DOMContentLoaded", function(){
    var headerHeight = document.querySelector("header.hero").offsetHeight;
    var nav = document.querySelector('nav.nav');

    document.body.addEventListener ("click", function(){
        window.scrollTo({ top: 0, behavior:'smooth'});
        return false;
    });

    window.addEventListener("scroll", function(){
        console.log("scrollTop: "+ window.scrollY);
        console.log("headerHeight: " + headerHeight);
        if (window.scrollY > headerHeight) {
            document.body.classList.add('nav-fixed-top');
            nav.classList.add('nav-fixed-top');
        }else{
            document.body.classList.remove('nav-fixed-top');
            nav.classList.remove('nav-fixed-top');
        }
    });

});

function addTask(){
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    var priorityInput = document.getElementById('priorityInput');
    var priority = priorityInput.value;

    if(taskText !== ''){
        var taskList = document.getElementById('taskList');
        var li = document.createElement('li');
        li.textContent = taskText + '(Prioridad: '+ priority + ')';
        li.contentEditable = true;
        var deleteButton = document.createElement ('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
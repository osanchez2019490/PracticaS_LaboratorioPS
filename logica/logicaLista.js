document.addEventListener("DOMContentLoaded", function(){
    var headerHeight = document.querySelector("header.hero").offsetHeight;
    var nav = document.querySelector('nav.nav');

 
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

        var taskContainer = document.createElement('span');
        taskContainer.textContent = taskText;
        taskContainer.contentEditable = true;

        var priorityContainer = document.createElement('span');
        priorityContainer.textContent =  '    (Prioridad: '+ priority + ')                 ';

        var deleteButton = document.createElement ('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(taskContainer);
        li.appendChild(priorityContainer);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
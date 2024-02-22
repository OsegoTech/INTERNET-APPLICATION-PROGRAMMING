var submit  = document.getElementById('todo');
var newTask = document.getElementById('add');

submit.addEventListener('input', function(event) {
    // console.log(event.target.value);
    if (event.target.value.length > 0) {
        newTask.disabled = false;
    } else {
        newTask.disabled = true;
    }

    var newItem = event.target.value;
    return newItem;
});

newTask.addEventListener('click', function(e) {
    e.preventDefault();
    var unorderList = document.getElementById('list');
    var listItem = document.createElement('li');
    listItem.innerHTML = submit.value;
    unorderList.appendChild(listItem);
    submit.value = '';
    newTask.disabled = true;
});
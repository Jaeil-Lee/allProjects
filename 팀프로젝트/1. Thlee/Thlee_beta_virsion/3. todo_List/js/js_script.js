const btnAddTask = document.querySelector('#addTask');
// const btnPopTask = document.querySelector('#popTask');

const todo_list = document.querySelector('.list_box');

btnAddTask.addEventListener('click', () => {
    todo_list.appendChild(new Task(false, '').element);
});

// btnPopTask.addEventListener('click', () => {
//     const tasks = document.querySelectorAll('.task');
//     tasks.forEach(task => {
//         if (task.children[0].checked) {
//             task.remove();
//         }
//     });
// })

class Task {
    constructor(completed, body) {
        this.element = document.createElement('div');
        this.element.className = 'element';
        
        this.element.innerHTML = '<input type="checkbox" id="check1"><label for="check1"><input type="text" placeholder="包み込むように...."></label>'

        // this.eleCompleted = document.createElement('input');
        // this.eleCompleted.type = 'checkbox';
        // this.eleCompleted.className = 'completed';
        // this.eleCompleted.checked = completed;
        
        // this.eleBody = document.createElement('input');
        // this.eleBody.className = 'body';
        // this.eleBody.value = body;
        
        // this.eleDelete = document.createElement('input');
        // this.eleDelete.type = 'button';
        // this.eleDelete.value = 'x';
        // this.eleDelete.class = 'delete';

        // this.eleDelete.addEventListener('click', () => {
        //     this.element.remove();
        // });
        
        // this.element.appendChild(this.eleCompleted);
        // this.element.appendChild(this.eleBody);
        // this.element.appendChild(this.eleDelete);

    }
}

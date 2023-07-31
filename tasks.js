const inputDate = document.querySelector('#input-date');
const taskList = document.querySelector('#task-list');
const taskModel = document.querySelector('#task-model');

// task buttons
const addTaskButton = document.querySelector('#add-task-button');
const addTaskIcon = document.querySelector('#add-task-icon');
const deleteTaskButtons = document.querySelectorAll('.task-remove');

let currentTaskList = null;

const renderTasks = (tasks) => {
    document.querySelectorAll('.task').forEach(task => task.remove());

    tasks.forEach((task, index) => {
        const taskEl = taskModel.cloneNode(true);

        taskEl.removeAttribute('id');
        taskEl.setAttribute('data-index', index);
        
        taskEl.querySelector('.task-status img').src = task.done ? 'assets/checked.svg' : 'assets/running.svg';
        taskEl.querySelector('.task-text').value = task.text;

        taskEl.style.display = 'flex';

        handleTaskElementEvents(taskEl);

        taskList.insertBefore(taskEl, taskList.querySelector('#add-task-icon'));
    })
}

handleSetGraphPercentage = () => {
    const taskNumber = currentTaskList.tasks.length;
    const doneTasks = currentTaskList.tasks.filter(task => task.done);

    const oneTaksPercent = 100 / taskNumber;
    const donePercent = Math.round(oneTaksPercent * doneTasks.length);

    setGraphPercentage(!isNaN(donePercent) ? donePercent : 0);
}

const saveTasklist = () => localStorage.setItem(`TODO_list_${inputDate.value}`, JSON.stringify(currentTaskList));

const addTask = () => {
    currentTaskList.tasks.push({ text: '', done: false });
    saveTasklist()

    renderTasks(currentTaskList.tasks);

    const newTaskText = taskList.querySelector(`.task[data-index="${currentTaskList.tasks.length - 1}"] .task-text`);
    console.log(newTaskText);
    newTaskText.style.outline = '0.5px solid #fff';
    newTaskText.removeAttribute('readonly')
    newTaskText.focus();

    handleSetGraphPercentage();
}

const updateTask = ({ currentTarget }) => {
    const index = parseInt(currentTarget.closest('.task').dataset.index);
    const text = currentTarget.value;

    currentTaskList.tasks[index].text = text;

    saveTasklist();

    return currentTaskList.tasks[index];
}

const setTaskDoneToggle = ({ currentTarget }) => {
    const index = currentTarget.closest('.task').dataset.index;
    currentTaskList.tasks[index].done = !currentTaskList.tasks[index].done;
    saveTasklist();
    renderTasks(currentTaskList.tasks);
    handleSetGraphPercentage();
}

const deleteTask = ({ currentTarget }) => {
    const task = currentTarget.closest('.task');
    const index = task.dataset.index;

    currentTaskList.tasks.splice(index, 1);
    saveTasklist();
    renderTasks(currentTaskList.tasks);
    handleSetGraphPercentage();
}

const handleTaskElementEvents = (taskEl) => {
    taskEl.querySelector('.task-remove').addEventListener('click', deleteTask);
    taskEl.querySelector('.task-status').addEventListener('click', setTaskDoneToggle);
    taskEl.querySelector('.task-text').addEventListener('input', updateTask);
    taskEl.querySelector('.task-text').addEventListener('dblclick', ({ currentTarget }) => {
        currentTarget.style.outline = '0.5px solid #fff';
        currentTarget.removeAttribute('readonly');
    })
    taskEl.querySelector('.task-text').addEventListener('blur', ({ currentTarget }) => {
        currentTarget.style.outline = 'none';
        currentTarget.setAttribute('readonly', '');
    })
}


const setDateString = (date) => {
    const weekDays = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    date = new Date(date);
    date.setHours(date.getHours() + 3);
    const weekDay = date.getDay();

    console.log(date.toString());
    
    let day = date.getDate();
    day = day < 10 ? `0${day}` : day;

    const month = date.getMonth();
    const year = date.getFullYear();

    const string = `${weekDays[weekDay]}, ${day} de ${months[month]} de ${year}`;
    document.querySelector('#date-string').innerText = string;

}


const changeDate = (date) => {
    console.log(date);
    const existentTaskList = localStorage.getItem(`TODO_list_${date}`)
    currentTaskList = existentTaskList ? JSON.parse(existentTaskList) : {date, tasks: [] };

    renderTasks(currentTaskList.tasks);
    handleSetGraphPercentage();
    setDateString(date);
}
inputDate.addEventListener('change', ({ currentTarget }) => changeDate(currentTarget.value));

const initialConfig = () => {
    const date = new Date();
    date.setHours(date.getHours() + 3);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const value = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;

    inputDate.value = value;  
    changeDate(value);
}
initialConfig();


addTaskButton.addEventListener('click', addTask);
addTaskIcon.addEventListener('click', addTask);


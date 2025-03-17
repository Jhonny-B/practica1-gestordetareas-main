const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Variables y constantes
const tasks = [];
const MAX_TASKS = 5; // Constante

// Función para agregar una tarea
function addTask(task) {
    if (tasks.length >= MAX_TASKS) {
        console.log("No puedes agregar más tareas. Límite alcanzado.");
        return;
    }
    tasks.push(task);
    console.log(`Tarea "${task}" agregada.`);
}

// Función para listar todas las tareas
function listTasks() {
    console.log("Lista de tareas:");
    if (tasks.length === 0) {
        console.log("No hay tareas.");
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
}

// Función para actualizar una tarea por su índice
function updateTask(index, newTask) {
    if (index < 0 || index >= tasks.length) {
        console.log("Índice inválido.");
        return;
    }
    tasks[index] = newTask;
    console.log(`Tarea ${index + 1} actualizada a "${newTask}".`);
}

// Función para eliminar una tarea por su índice
function removeTask(index) {
    if (index < 0 || index >= tasks.length) {
        console.log("Índice inválido.");
        return;
    }
    const removed = tasks.splice(index, 1);
    console.log(`Tarea "${removed}" eliminada.`);
}

// Exportaciones de funciones
module.exports = { addTask, listTasks, updateTask, removeTask };

// Rutas de la API
app.post('/tasks', (req, res) => {
    const task = req.body.task;
    const result = addTask(task);
    res.send(result);
});

app.get('/tasks', (req, res) => {
    const tasks = listTasks();
    res.json(tasks);
});

app.put('/tasks/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const newTask = req.body.task;
    const result = updateTask(index, newTask);
    res.send(result);
});

app.delete('/tasks/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const result = removeTask(index);
    res.send(result);
});

app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});
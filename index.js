// Importaciones de funciones
const { addTask, listTasks, updateTask, removeTask } = require("./tasks");

// Agregar algunas tareas
addTask("Estudiar Node.js");
addTask("Practicar JavaScript");
addTask("Hacer ejercicio");
addTask("Estudiar las tareas");

// Listar tareas
listTasks();

// Eliminar una tarea
removeTask(1);

// Listar nuevamente para verificar
listTasks();

//actualizar tarea
updateTask(1, "Practicar node js todos los dias");

listTasks();

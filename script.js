const API_URL = "YOUR_API_GATEWAY_URL";

async function addTask() {

    const task = document.getElementById("taskInput").value;

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ task })
    });

    loadTasks();
}

async function loadTasks() {

    const response = await fetch(API_URL);

    const tasks = await response.json();

    const list = document.getElementById("taskList");

    list.innerHTML = "";

    tasks.forEach(task => {

        const li = document.createElement("li");

        li.innerText = task.task;

        list.appendChild(li);
    });
}

loadTasks();
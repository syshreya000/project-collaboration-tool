const ctx = document.getElementById('myChart');

if (ctx) {
    new Chart(ctx, {
        type: 'bar',

        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

            datasets: [{
                label: 'Tasks Completed',
                data: [12, 19, 8, 15, 20, 17],

                backgroundColor: [
                    '#2563EB',
                    '#3B82F6',
                    '#60A5FA',
                    '#2563EB',
                    '#3B82F6',
                    '#60A5FA'
                ],

                borderRadius: 8
            }]
        },

        options: {
            responsive: true,

            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            },

            scales: {
                x: {
                    ticks: {
                        color: 'white'
                    }
                },

                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'white'
                    }
                }
            }
        }
    });
}
let taskCount = 1;

function addTask() {
    const task = document.createElement("div");
    task.className = "task";
    task.draggable = true;
    task.innerText = "New Task " + taskCount++;

    addDragEvents(task);

    document.getElementById("todo").appendChild(task);
}

function addDragEvents(task) {

    task.addEventListener("dragstart", () => {
        task.classList.add("dragging");
    });

    task.addEventListener("dragend", () => {
        task.classList.remove("dragging");
    });

}

const columns = document.querySelectorAll(".column");

columns.forEach(column => {

    column.addEventListener("dragover", e => {
        e.preventDefault();

        const dragging = document.querySelector(".dragging");
        column.appendChild(dragging);
    });

});
function showSection(sectionId) {

    let sections = document.querySelectorAll(".section");

    sections.forEach(function(section) {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
}
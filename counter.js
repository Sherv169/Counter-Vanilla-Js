window.onload = function () {
    const countButton = document.getElementById("count-button");
    countButton.onclick = function () {
        countDOMElements();
    };
// Button function & DOMElement counter


    const countDOMElements = function () {
        let count = document.querySelectorAll("*").length;
        document.getElementById("count-result").innerHTML = count.toString();
    };
//calling the function
//wild carding all elements on page
//calling it & saving data under count-result


    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task-button");
    addTaskButton.onclick = function (item) {
        taskList.push({
            description: taskInput.value,
            completed: false,
            id: taskList.length +1,
        });
        updateTaskList();
    };
//task input function & button
//dynamically pushing and storing data item to list - updateTaskList 



    let taskList = [{description: "dummy task", completed: false, id: 1}];
//setting inital value to task-list

    const updateTaskList = function () {
        document.getElementById("task-list").innerHTML = "";
        taskList.forEach(function (item) {
            let taskItem = document.createElement("li");
            taskItem.innerText = item.description;
            document.getElementById("task-list").appendChild(taskItem);
        });
    };
//creating new li for each input



    const _DOMObserver = new MutationObserver(function () {
        countDOMElements();
    });
//DOMObserver MutationOb function attached to countDomEl to continue observing changes within the DOM



    _DOMObserver.observe(document.getElementById("my-element-to-observe"), {
        subtree: true,
        childList: true,
    });
//reading new elements on the dom, updating to list & using countDOMElements to continue count.
    updateTaskList();
};
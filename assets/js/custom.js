
// count(0+0);

let btn = document.getElementById('btn');
let rowDiv = document.getElementById('row-div');

let totalItem = [];

btn.addEventListener('click', function(e) {
    let form = new FormData(document.getElementById('form'));

    let activeValue = {};
    
    form.forEach((value, property) => {
        activeValue[property] = value
    })

    activeValue.id = totalItem.length + 1;

    totalItem.push(activeValue);

    toDo();
    count();
    task();

    document.getElementById('form').reset();
        
})

function toDo() {
    let toDoItem = function(item) {
        return `<div class="col-lg-4 my-3 ">
                    <div data-id="${item.id}" class="task-one" id="element" >
                        <h5>#${item.title}</h5>
                        <p>${item.text}</p>
                    </div>
                </div>`;
    }
    
    let output = totalItem.map(item => {
        return toDoItem(item);
    })

    rowDiv.innerHTML = output.join('');
}

function count() {
    let toDoItem = [
        {
            status: 'Complete',
            item: [],
            total_span: document.getElementById('total-complete')
        },
        {
            status: 'Running',
            item: [],
            total_span: document.getElementById('total-running')
        },
        {
            status: 'Cancel',
            item: [],
            total_span: document.getElementById('total-cancel')
        },
        {
            status: 'Upcoming',
            item: [],
            total_span: document.getElementById('total-upcoming')
        },
    ]

    toDoItem.map(item => {
        totalItem.map(token => {
            if(token.status == item.status){
                item.item.push('ok')
            }
        })
    })

    toDoItem.forEach(item => {      
        item.total_span.innerHTML = item.item.length <= 9 ? '0' + item.item.length : item.item.length;
    })

    // one;
    
    let completeTask = [];

    totalItem.map(token => {
        if(token.status == 'Complete'){
            completeTask.push(token)
        }
    })

    let tag = document.getElementById('complete-atag');
    tag.addEventListener('click', function() {

        let toDoItem = function(item) {
            return `<div class="col-lg-4 my-3">
                        <div class="task-one" id="element">
                            <h5>#${item.title}</h5>
                            <p>${item.text}</p>
                        </div>
                    </div>`;
        }

        let output = completeTask.map(item => {
            return toDoItem(item);
        })

        rowDiv.innerHTML = output.join('');
    })

    // tow;

    let runningTask = [];

    totalItem.map(token => {
        if(token.status == 'Running'){
            runningTask.push(token)
        }
    })

    let tagTow = document.getElementById('running-atag');
    tagTow.addEventListener('click', function() {

        let toDoItem = function(item) {
            return `<div class="col-lg-4 my-3">
                        <div class="task-one" id="element">
                            <h5>#${item.title}</h5>
                            <p>${item.text}</p>
                        </div>
                    </div>`;
        }

        let output = runningTask.map(item => {
            return toDoItem(item);
        })

        rowDiv.innerHTML = output.join('');
    })

    // three;

    let cancelTask = [];

    totalItem.map(token => {
        if(token.status == 'Cancel'){
            cancelTask.push(token)
        }
    })

    let tagThree = document.getElementById('cancel-atag');
    tagThree.addEventListener('click', function() {

        let toDoItem = function(item) {
            return `<div class="col-lg-4 my-3">
                        <div class="task-one" id="element">
                            <h5>#${item.title}</h5>
                            <p>${item.text}</p>
                        </div>
                    </div>`;
        }

        let output = cancelTask.map(item => {
            return toDoItem(item);
        })

        rowDiv.innerHTML = output.join('');
    })

    // four;

    let upcomingTask = [];

    totalItem.map(token => {
        if(token.status == 'Running'){
            upcomingTask.push(token)
        }
    })

    let tagFour = document.getElementById('upcoming-atag');
    tagFour.addEventListener('click', function() {

        let toDoItem = function(item) {
            return `<div class="col-lg-4 my-3">
                        <div class="task-one" id="element">
                            <h5>#${item.title}</h5>
                            <p>${item.text}</p>
                        </div>
                    </div>`;
        }

        let output = upcomingTask.map(item => {
            return toDoItem(item);
        })

        rowDiv.innerHTML = output.join('');
    })






}

function task() {
    let taskOne = document.querySelectorAll('.task-one');

    taskOne.forEach(item => {
        item.addEventListener('click', function(e) {
            
            e.preventDefault();

            let li = 1 + 1 == 2;
                     
            if(li){
                let dataId = e.target.getAttribute('data-id');
                
                let edit = totalItem.find(token => {
                    return token.id == dataId;
                })              
                
                for(let p in edit){                 
                    if(document.querySelector(`[name="${p}"]`)) {
                        document.querySelector(`[name="${p}"]`).value = edit[p];
                    } 
                }
            }
        })
    })
    
}



// let obj = {
//     name: 'junaeid',
//     class: 'five',
//     status: 'pass'
// } 

// for(let p in obj){
//     console.log(p+obj[p]);
// }
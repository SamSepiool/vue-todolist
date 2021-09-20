const app = new Vue({

    el: root,

    data: {
        title: 'ToDo-List',
        toDos:[
            {
                task:'Fare i compiti',
                done: false
            },
            {
                task:'Fare la spesa',
                done: false
            },
            {
                task:'Fare il bucato',
                done: false
            },
        ]
    }
})
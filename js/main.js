const app = new Vue({

    el: root,

    data: {
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
        ],
    
        newTodo:'',
    },
    methods:{

        addTodo: function(){
            if(this.newTodo != ''){
                let transferObj = {task: this.newTodo, done: false};
                this.toDos.push(transferObj);
                this.newTodo = '';
            }
        },

        deleteTodo: function(index){
            this.toDos.splice(index, 1);
        },

        checkTodo: function (index){
            
            (this.toDos[index].done == false) ? this.toDos[index].done = true : alert('task già completata')
            console.log(this.toDos[index].done)
                   
        }

    }
})
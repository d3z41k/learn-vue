Vue.component('task-list', {
    template: 
        `<div>
            <task v-for="task in tasks">{{ task.task }}</task>
        </div`,

    data() {
        return {
            tasks: [
                { task: 'Go to the store', completed: true},
                { task: 'Finish screencast', completed: false},
                { task: 'Make donation', completed: false},
                { task: 'Clear inbox', completed: false},
                { task: 'Make dinner', completed: false},
                { task: 'Clean room', completed: true}
            ]
        }
    }
})

Vue.component('task', {
    template: '<li><slot></slot></li>'
})

var app = new Vue({

    el: '#root',
    data: {
        newName: '',
        names: ['Joe', 'Mary', 'Jane', 'Jack'],
        title: 'Now the title is being set through JS',
        className: 'color-red',
        isLoading: false,
        message: 'Hello World',
        tasks: [
            { description: 'Go to the store', completed: true},
            { description: 'Finish screencast', completed: false},
            { description: 'Make donation', completed: false},
            { description: 'Clear inbox', completed: false},
            { description: 'Make dinner', completed: false},
            { description: 'Clean room', completed: true}
        ]
    },

    computed: {
        reverseMessage() {
            return this.message.split('').reverse().join('')
        },

        incompliteTask() {
            return this.tasks.filter(task => !task.completed)
        }
    },

    methods: {

        addName() {
            this.names.push(this.newName)
            this.newName = ''
        },

        toggleClass() {
            this.isLoading = true
        }

    },

})
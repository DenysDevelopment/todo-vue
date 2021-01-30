Vue.createApp({
	data() {
		return {
			inputText: '',
			title: 'Todos',
			todoList: JSON.parse(localStorage.getItem('task')) === null ? [] : JSON.parse(localStorage.getItem('task')),
		};
	},

	methods: {
		addTask() {
			if (this.inputText === '') return;

			this.todoList.push(this.inputText);
			this.inputText = '';

			localStorage.setItem('task', JSON.stringify(this.todoList));
		},

		removeTask(idx) {
			this.todoList.splice(idx, 1);
			localStorage.setItem('task', JSON.stringify(this.todoList));
		},

		inputHandler(event) {
			this.inputText = event.target.value;
		},
	},
}).mount('.task');

import Vue from 'vue'
import Form from './core/Form'
import axios from 'axios'
import Example from './components/Example'


window.axios = axios
window.Form = Form

new Vue({
	el: '#app',

	components: {
		Example
	},

	data: {
		form: new Form({
			name: '',
			description: '',
		})
	},

	methods: {
		onSubmit() {
			this.form.post('/projects')
                .then(response => console.log('Complete!'))
		}
	}
})

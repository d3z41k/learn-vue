<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="{{ mix('css/app.css', 'build') }}" type="text/css">
	<title>Document</title>
	<style>body { padding-top: 40px; }</style>
</head>

<body>
	<div id="app" class="container">

		<example></example>

		@include ('projects.list')		

		<form method="POST" action="/projects" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
			<div class="control">
				<label for="name" class="label">Project Name:</label>
				
				<input type="text" id="name" name="name" class="input" v-model="form.name"> 

				<span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
			</div>

			<div class="control">
				<label for="description" class="label">Project Description:</label>
				
                <input type="text" id="description" name="description" class="input" v-model="form.description">

				<span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
			</div>

			<div class="control">
				<button class="button is-primary" :disabled="form.errors.any()">Create</button>
			</div>
		</form>
	</div>

	<script src="{{ mix('js/app.js', 'build') }}"></script>
</body>
</html>
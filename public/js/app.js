webpackJsonp([0],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    template: '<h1>Hello World</h1>'
});

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__(31);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Form = function () {
	function Form(data) {
		_classCallCheck(this, Form);

		this.originalData = data;

		for (var field in data) {
			this[field] = data[field];
		}

		this.errors = new __WEBPACK_IMPORTED_MODULE_0__Errors__["a" /* default */]();
	}

	_createClass(Form, [{
		key: 'data',
		value: function data() {
			var data = {};

			for (var property in this.originalData) {
				data[property] = this[property];
			}

			return data;
		}
	}, {
		key: 'reset',
		value: function reset() {
			for (var field in this.originalData) {
				this[field] = '';
			}

			this.errors.clear();
		}
	}, {
		key: 'post',
		value: function post(url) {
			return this.submit('post', url);
		}
	}, {
		key: 'put',
		value: function put(url) {
			return this.submit('put', url);
		}
	}, {
		key: 'patch',
		value: function patch(url) {
			return this.submit('patch', url);
		}
	}, {
		key: 'delete',
		value: function _delete(url) {
			return this.submit('delete', url);
		}
	}, {
		key: 'submit',
		value: function submit(requestType, url) {
			var _this = this;

			return new Promise(function (resolve, reject) {
				axios[requestType](url, _this.data()).then(function (response) {
					_this.onSuccess(response.data);

					resolve(response.data);
				}).catch(function (error) {
					_this.onFail(error.response.data.errors);

					reject(error.response.data.errors);
				});
			});
		}
	}, {
		key: 'onSuccess',
		value: function onSuccess(data) {
			alert(data.message);

			this.reset();
		}
	}, {
		key: 'onFail',
		value: function onFail(errors) {
			this.errors.record(errors);
		}
	}]);

	return Form;
}();

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Form__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Example__ = __webpack_require__(11);





window.axios = __WEBPACK_IMPORTED_MODULE_2_axios___default.a;
window.Form = __WEBPACK_IMPORTED_MODULE_1__core_Form__["a" /* default */];

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
	el: '#app',

	components: {
		Example: __WEBPACK_IMPORTED_MODULE_3__components_Example__["a" /* default */]
	},

	data: {
		form: new __WEBPACK_IMPORTED_MODULE_1__core_Form__["a" /* default */]({
			name: '',
			description: ''
		})
	},

	methods: {
		onSubmit: function onSubmit() {
			this.form.post('/projects').then(function (response) {
				return console.log('Complete!');
			});
		}
	}
});

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
	function Errors() {
		_classCallCheck(this, Errors);

		this.errors = {};
	}

	_createClass(Errors, [{
		key: "has",
		value: function has(field) {
			return this.errors.hasOwnProperty(field);
		}
	}, {
		key: "any",
		value: function any() {
			return Object.keys(this.errors).length > 0;
		}
	}, {
		key: "get",
		value: function get(field) {
			if (this.errors[field]) {
				return this.errors[field][0];
			}
		}
	}, {
		key: "record",
		value: function record(errors) {
			this.errors = errors;
		}
	}, {
		key: "clear",
		value: function clear(field) {
			if (field) {
				delete this.errors[field];

				return;
			}

			this.errors = {};
		}
	}]);

	return Errors;
}();

/* harmony default export */ __webpack_exports__["a"] = (Errors);

/***/ })

},[30]);
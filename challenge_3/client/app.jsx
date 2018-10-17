
class App extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			form: 1,
			formData: {}
		}

		this.submitF1 = this.submitF1.bind(this);
		this.submitF2 = this.submitF2.bind(this);
	}

	submitF1() {

		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;

		var formData = {
			name,
			email,
			password
		};

		this.setState({form: 2, formData});

	}

	submitF2() {
		var address_line_1  = document.getElementById('addressLine1').value;
		var address_line_2 = document.getElementById('addressLine2').value;
		var city = document.getElementById('city').value;
		var state = document.getElementById('state').value;
		var zip_code = document.getElementById('zipCode').value;

		var formData = {
			address_line_1,
			address_line_2,
			city,
			state,
			zip_code
		};

		var oldFormData = this.state.formData;

		var newFormData = Object.assign(formData, oldFormData);

		this.setState({form: 3, formData: newFormData});

	}

	render() {
		if(this.state.form === 0) {
			return (
				<div>
				<button>Checkout</button>
				</div>
			)
		} else if(this.state.form === 1) {
			return (
				<div className="form">
					Name: <input type="text" id="name"/>
					Email: <input type="text" id="email"/>
					Password: <input type="text" id="password"/>
					<button onClick={this.submitF1}>next</button>
				</div>
			)
		} else if(this.state.form === 2) {
			return (
				<div className="form">
					Address Line 1: <input type="text" id="addressLine1"/>
					Address Line 2: <input type="text" id="addressLine2"/>
					City: <input type="text" id="city"/>
					State: <input type="text" id="state"/>
					Zip Code: <input type="text" id="zipCode"/>
					<button onClick={this.submitF2}>next</button>
				</div>
			)
		}
	}
}


ReactDOM.render(<App />, document.getElementById('app'));

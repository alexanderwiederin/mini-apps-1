
class App extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			form: 0,
			formData: {}
		}

		this.startForm = this.startForm.bind(this);
		this.submitF1 = this.submitF1.bind(this);
		this.submitF2 = this.submitF2.bind(this);
		this.submitF3 = this.submitF3.bind(this);
		this.finalizePurchase = this.finalizePurchase.bind(this);
	}

	startForm() {

		this.setState({form: 1});

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

	submitF3() {
		var credit_card_num  = document.getElementById('creditCardNum').value;
		var expiry_date = document.getElementById('expiryDate').value;
		var billing_zip_code = document.getElementById('billingZipCode').value;

		var formData = {
			credit_card_num,
			expiry_date,
			billing_zip_code,
		};

		var oldFormData = this.state.formData;

		var newFormData = Object.assign(formData, oldFormData);

		this.setState({form: 4, formData: newFormData});

	}

	finalizePurchase() {
		var data = this.state.formData;
		console.log(data);
		fetch('/purchase', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => {
			console.log('success');
			this.setState({form: 0, formData: {}});
		});
	}

	render() {
		if(this.state.form === 0) {
			return (
				<div>
				<button onClick={this.startForm}>Checkout</button>
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
		} else if(this.state.form === 3) {
			return (
				<div className="form">
					Credit Card Number: <input type="text" id="creditCardNum"/>
					Expiry Date: <input type="text" id="expiryDate"/>
					Billing Zip Code: <input type="text" id="billingZipCode"/>
					<button onClick={this.submitF3}>next</button>
				</div>
			)
		} else if(this.state.form === 4) {
			return (
				<div className="finalCheck">
					<div><span>Name: </span><span>{this.state.formData.name}</span></div>
 					<div><span>Email: </span><span>{this.state.formData.email}</span></div>
					<div><span>Password: </span><span>{this.state.formData.password}</span></div>
					<div><span>Address Line 1: </span><span>{this.state.formData.address_line_1}</span></div>
					<div><span>Address Line 2: </span><span>{this.state.formData.address_line_2}</span></div>
					<div><span>City: </span><span>{this.state.formData.city}</span></div>
					<div><span>State: </span><span>{this.state.formData.state}</span></div>
					<div><span>Zip Code: </span><span>{this.state.formData.zip_code}</span></div>
					<div><span>Credit Card Number: </span><span>{this.state.formData.credit_card_num}</span></div>
					<div><span>Expiry Date: </span><span>{this.state.formData.expiry_date}</span></div>
					<div><span>Billing Zip Code: </span><span>{this.state.formData.billing_zip_code}</span></div>
					<button onClick={this.finalizePurchase}>Purchase</button>
				</div>
			)
		}
	}
}


ReactDOM.render(<App />, document.getElementById('app'));

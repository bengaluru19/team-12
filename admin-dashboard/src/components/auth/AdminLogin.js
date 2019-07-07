import React, { Component } from 'react';
import './Login.css';
import history from './../../history';
import { Link } from 'react-router-dom';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			phone: '',
			password: '',
			submitting: false,
			logginIn: false,
			isDemoDialogOpen: false,
			regSubmitting: false,
		};
	}
	loginUser({ phone, password }) {
		this.setState({ logginIn: true });
		history.push('/create');
		this.setState({ logginIn: false });
	}
	onChangePhone = (e) => {
		this.setState({ phone: e.target.value })
	}
	onChangePassword = (e) => {
		this.setState({ password: e.target.value })
	}
	handleSubmit = (event) => {
		event.preventDefault()
		let phone = this.state.phone;
		let password = this.state.password;
		this.loginUser({ phone: phone, password: password });
	}
	render() {
		return (
			<div className="App">
                
				<div className="login-component-wrap">
                    <div style={{ textAlign: 'center' }}>
                        <h1>CareWorks Foundation Admin Portal</h1>
                    </div>
					<div className="login">
						<form onSubmit={this.handleSubmit} className="login-form" >
							<div className="form-group">
								<input type="text" name="phone" onChange={this.onChangePhone} />
								<label className="control-label" htmlFor="input">Phone number</label><i className="bar"></i>
							</div>

							<span className='red'>{this.emailErrorMessage}</span>
							<br />
							<div className="form-group">
								<input type="password" name="password" onChange={this.onChangePassword} />
								<label className="control-label" htmlFor="input">Password</label><i className="bar"></i>
							</div>
							<span className='red'>{this.passwordErrorMessage}</span>
							<br />
                            <Link to="/create">
                                <button className='btn-theme' type="submit">
                                    Login
                                </button>
                            </Link>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default (Login);
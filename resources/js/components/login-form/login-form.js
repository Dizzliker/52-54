import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormValidator } from "../../services";

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                login: '',
                password: '',
            },
            formErrors: {},
        };
        this.formValidator = new FormValidator();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            formData: {
                ...this.state.formData,
                [event.target.name]: event.target.value
            }
        });
    }

    onFetchLogin = (e) => {
        e.preventDefault();

        const {login, password} = this.state.formData;
        const {success, errors} = this.formValidator.validate({
            login: {
                value: login,
                types: ['required'],
            },
            password: {
                value: password,
                types: ['required', 'min:8'], 
            }
        });

        if (!success) {
            this.setState({formErrors: errors});
            return;
        }
    }

    render() {
        const {login, password} = this.state.formData;
        const {loginError, passwordError} = this.state.formErrors;

        return (
            <div className="login-container">
                <form onSubmit={this.onFetchLogin} className="login-form" method="post">
                    <h3 className="header-3">Авторизация</h3>

                    <div className="input-field">
                        <input type="text" className="input email error" name="email" value={login} onChange={this.handleChange} placeholder="Ваша почта"/>
                        {loginError && 
                            <div className="input__error-container">
                                <img className="input__error-icon" src="/images/danger-icon.svg" alt="Внимание!"/>
                                <span className="input__error-text">{loginError}</span>
                            </div>
                        }
                    </div>
                    <div className="input-field">
                        <input type="password" className="input password" name="password" value={password} onChange={this.handleChange} placeholder="Пароль"/>
                        {passwordError && 
                            <div className="input__error-container">
                                <img className="input__error-icon" src="/images/danger-icon.svg" alt="Внимание!"/>
                                <span className="input__error-text">{passwordError}</span>
                            </div>
                        }
                    </div>
                     
                    <button className="btn btn-primary">Войти</button>
                    
                    <Link to="/register" className="login-form__link link">
                        Зарегистрироваться
                    </Link>
                </form>
            </div>
        );
    }
}
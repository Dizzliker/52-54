import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { fetchLogin } from "../../actions";
import { FormValidator, LoginService, PageService } from "../../services";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                password: '',
                userRemember: true,
            },
            formErrors: {},
        };
        this.formValidator = new FormValidator();
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        PageService.setTitle('Авторизация');
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
            formData: {
                ...this.state.formData,
                [target.name]: value
            },
            formErrors: {
                ...this.state.formErrors,
                [`${target.name}${this.formValidator.postfix.error}`]: '',
            },
        });
    }

    onFetchLogin = (e) => {
        e.preventDefault();

        const {email, password} = this.state.formData;
        const {success, errors} = this.formValidator.validate({
            email: {
                value: email,
                types: ['required', 'email'],
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

        this.props.fetchLogin(this.state.formData);
    }

    render() {
        const {email, password, userRemember} = this.state.formData;
        const {emailError, passwordError} = this.state.formErrors;

        return (
            <div className="login-container">
                <form onSubmit={this.onFetchLogin} className="login-form" method="post">
                    <h3 className="header-3">Авторизация</h3>

                    <div className="input-field">
                        <input type="text" className="input email error" name="email" value={email} onChange={this.handleChange} placeholder="Ваша почта"/>
                        {emailError && 
                            <div className="input__error-container">
                                <img className="input__error-icon" src="/images/danger-icon.svg" alt="Внимание!"/>
                                <span className="input__error-text">{emailError}</span>
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

                    <div className="remember-container">
                        <label htmlFor="remember-checkbox" className="remember-label">
                            <input type="checkbox" id="remember-checkbox" className="remember-checkbox" name="userRemember" checked={userRemember} onChange={this.handleChange}/>
                            <span className="remember-text">Запомнить меня</span>
                        </label>
                    </div>
                     
                    <button className="btn btn-primary">Войти</button>
                    
                    <Link to="/register" className="login-form__link link">
                        Зарегистрироваться
                    </Link>
                </form>
            </div>
        );
    }
};

const mapStateToProps = ({authUser}) => {
    return {
        authUser,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchLogin: fetchLogin(new LoginService(), dispatch), 
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
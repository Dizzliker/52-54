import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRegister, registerFailure } from "../../actions";
import {FormValidator, PageService, RegisterService} from "../../services";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                nickname: '',
                password: '',
                passwordConfirm: '',
                userAgreement: true,
                userTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            },
            formErrors: {},
        };
        this.formValidator = new FormValidator();
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        PageService.setTitle('Регистрация');
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

    onFetchRegister = (e) => {
        e.preventDefault();

        const {email, nickname, password, passwordConfirm, userAgreement, userTimezone} = this.state.formData;
        const {setFormError, fetchRegister} = this.props;
        const {success, errors} = this.formValidator.validate({
            email: {
                value: email,
                types: ['required', 'email'],
            },
            nickname: {
                value: nickname,
                types: ['required', 'max:25'],
            },
            password: {
                value: password,
                types: ['required', 'min:8', 'confirmed'],
            },
            passwordConfirm: {
                value: passwordConfirm,
                types: ['required', 'min:8'],
            },
            userAgreement: {
                value: userAgreement,
                types: ['required'],
            },
            userTimezone: {
                value: userTimezone,
                types: ['required', 'string'],
            }
        });

        if (!success) {
            setFormError({
                success,
                errors,
            });
            return;
        }

        fetchRegister(this.state.formData);
    }

    render() {
        const {email, nickname, password, passwordConfirm, userAgreement, userTimezone} = this.state.formData;
        const {emailError, nicknameError, passwordError, passwordConfirmError} = this.props.authUser.errors;

        return (
            <div className="register-container">
                <form onSubmit={this.onFetchRegister} className="register-form" method="post">
                    <h3 className="header-3">Регистрация</h3>

                    <div className="input-field">
                        <input type="text" className="input email error" name="email" value={email} onChange={this.handleChange} placeholder="Ваша почта"/>
                        {emailError ? 
                            <div className="input__error-container">
                                <img className="input__error-icon" src="/images/danger-icon.svg" alt="Внимание!"/>
                                <span className="input__error-text">{emailError}</span>
                            </div>
                        : null}
                    </div>
                    <div className="input-field">
                        <input type="text" className="input nickname" name="nickname" value={nickname} onChange={this.handleChange} placeholder="Ваш всевдоним"/>
                        {nicknameError ?
                            <div className="input__error-container">
                                <img className="input__error-icon" src="/images/danger-icon.svg" alt="Внимание!"/> 
                                <span className="input__error-text">{nicknameError}</span>
                            </div>
                        : null}
                    </div>
                    <div className="input-field">
                        <input type="password" className="input password" name="password" value={password} onChange={this.handleChange} placeholder="Пароль"/>
                        {passwordError ? 
                            <div className="input__error-container">
                                <img className="input__error-icon" src="/images/danger-icon.svg" alt="Внимание!"/> 
                                <span className="input__error-text">{passwordError}</span>
                            </div>
                        : null}
                    </div>
                    <div className="input-field">
                        <input type="password" className="input password-confirm" name="passwordConfirm" value={passwordConfirm} onChange={this.handleChange} placeholder="Повторите пароль"/>
                        {passwordConfirmError ?
                            <div className="input__error-container">
                                <img className="input__error-icon" src="/images/danger-icon.svg" alt="Внимание!"/> 
                                <span className="input__error-text">{passwordConfirmError}</span>
                            </div>
                        : null}
                    </div>

                    <input type="hidden" name="userTimezone" value={userTimezone} />
                    
                    <label htmlFor="agreement-checkbox" className="agreement-container">
                        <input type="checkbox" id="agreement-checkbox" className="agreement-checkbox" name="userAgreement" checked={userAgreement} onChange={this.handleChange}/>
                        <span className="agreement-text">Я согласен с пользовательским соглашением</span>
                    </label>
                        
                    <button className={`btn btn-primary ${userAgreement ? '' : 'disabled'}`} disabled={!userAgreement}>Зарегистрироваться</button>
                    
                    <Link to='/' className="register-form__link link">
                        У меня уже есть аккаунт
                    </Link>
                </form>
            </div>
        );
    }
};

const mapStateToProps = ({authUser}) => {
    return {
        authUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchRegister: fetchRegister(new RegisterService(), dispatch),
        setFormError: (error) => dispatch(registerFailure(error)),
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
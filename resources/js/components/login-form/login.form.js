import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LoginForm extends Component {
    render() {
        return (
            <div className="login-container">
                <form action="#" className="login-form" method="post">
                    <h3 className="header-3">Авторизация</h3>
                    
                    <div className="input-field">
                        <input type="text" className="input email error" name="email" placeholder="Ваша почта"/>
                    </div>
                    <div className="input-field">
                        <input type="password" className="input password" name="password" placeholder="Пароль"/>
                    </div>
                     
                    <button type="button" className="btn btn-primary">Войти</button>
                    
                    <Link to="/register" className="login-form__link link">
                        Зарегистрироваться
                    </Link>
                </form>
            </div>
        );
    }
}
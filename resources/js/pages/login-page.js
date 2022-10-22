import React, { Component } from "react";
import { AuthLayout } from "../layouts";
import LoginForm from '../components/login-form';
import { PageService } from "../services";

export default class LoginPage extends Component {
    componentDidMount() {
        PageService.setTitle('Авторизация');
    }

    render() {
        return (
            <AuthLayout>
                <LoginForm />
            </AuthLayout>
        );
    }
}
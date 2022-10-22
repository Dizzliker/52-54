import React, { Component } from "react";
import {AuthLayout} from '../layouts';
import RegisterForm from "../components/register-form/register-form";
import { PageService } from "../services";

export default class RegisterPage extends Component {
    componentDidMount() {
        PageService.setTitle('Регистрация');
    }

    render() {
        return (
            <AuthLayout>
                <RegisterForm />
            </AuthLayout>
        );
    }
}
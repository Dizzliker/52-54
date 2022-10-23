import React, { Component } from "react";
import { LeftSide, RightSide } from "../components/auth";
import RegisterForm from "../components/register-form/register-form";
import { PageService } from "../services";

export default class RegisterPage extends Component {
    componentDidMount() {
        PageService.setTitle('Регистрация');
    }

    render() {
        return (
            <>
                <LeftSide />
                <RightSide>
                    <RegisterForm />
                </RightSide>
            </>
        );
    }
}
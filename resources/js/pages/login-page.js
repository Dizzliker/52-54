import React, { Component } from "react";
import LoginForm from '../components/login-form';
import {LeftSide, RightSide} from '../components/auth';
import { PageService } from "../services";

export default class LoginPage extends Component {
    componentDidMount() {
        PageService.setTitle('Авторизация');
    }

    render() {
        return (
            <>
                <LeftSide />
                <RightSide>
                    <LoginForm />
                </RightSide>
            </>
        );
    }
}
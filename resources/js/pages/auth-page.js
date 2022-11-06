import { AuthLayout } from "../layouts";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../components/login-form";
import RegisterForm from "../components/register-form";

const AuthPage = () => {
    return (
        <AuthLayout>
            <Routes>
                <Route path="/"         element={<LoginForm />}/>
                <Route path="/register" element={<RegisterForm />}/>
            </Routes>
        </AuthLayout>
    );
}

export default AuthPage;
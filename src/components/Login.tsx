import { Button } from "primereact/button";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface AboutUsProps {
    image: string;
    color: string;
}

export const Login: React.FC<AboutUsProps> = ({ image, color }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const url: string = "url(images/" + image + ")";

    const colorDiv: string = "bg-" + color + "-400 p-4 w-11 h-30";

    const handleSubmit = (event: any) => {
        event.preventDefault();
        navigate('/profile');
    };

    const handleEmailChange = (event: any) => {
        const value = event.target.value;
        setEmail(value);

        if (!value) {
            setEmailError("email is required");
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            setEmailError("email is invalid");
        } else {
            setEmailError("");
        }
    };

    const handlePasswordChange = (event: any) => {
        const value = event.target.value;
        setPassword(value);

        if (!value) {
            setPasswordError("password is required");
        } else if (value.length < 6) {
            setPasswordError("password is too short");
        } else {
            setPasswordError("");
        }
    };

    let formValid = false;
    if (![email, password].includes('')) {
        formValid = true;
    }

    return (
        <div className="grid grid-cols-2">
            <div
                className="bg-cover bg-no-repeat w-screen h-screen"
                style={{ backgroundImage: url }}
            ></div>
            <div className={`${colorDiv} rounded-lg flex flex-col justify-left items-left p-8`}>
                <header className="text-5xl font-roboto text-white mb-4">
                    <h1>CVTech</h1>
                    <h2 className="text-2xl font-montserrat text-base text-white">Inicia sesión</h2>
                </header>

                <form onSubmit={handleSubmit} className="text-left">
                    <div className="mb-4">
                        <div className="text-2xl font-montserrat text-base text-white mb-1">Email</div>
                        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                        {emailError && <span className="text-red-500 text-sm ml-2">{emailError}</span>}
                    </div>

                    <div className="mb-4">
                        <div className="text-2xl font-montserrat text-base text-white mb-1">Password</div>
                        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                        {passwordError && <span className="text-red-500 text-sm ml-2">{passwordError}</span>}
                    </div>
                    <div className="mb-4">
                        <Link to="/forgetPassword" className="text-2xl font-montserrat text-base text-white">¿Has olvidado tu contraseña?</Link>
                    </div>
                    <Button disabled={!formValid}>Iniciar sesión</Button>
                </form>
            </div>
        </div>
    );
}
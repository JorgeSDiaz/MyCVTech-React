import { Button } from "primereact/button";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        
        navigate('/profile');
    };

    return (
        <div>
            <Button onClick={handleLogin}>Log in</Button>
        </div>
    );
}
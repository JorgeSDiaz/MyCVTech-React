import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import {Login} from "./pages/Login" // Asumiendo que tienes un componente de Login
import { LandingPage } from './pages/LandingPage';

export default function App() {
  return (
      <>
        <Header color="#1D62CA" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import '../navbar.css';

const NavBar = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const HLogout = async () => {
    await logout();
    navigate('/signin');
  };

  return (
    <div className="card w-full px-4 sm:px-8 py-3 border-b border-zinc-800">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-xl sm:text-2xl text-zinc-100 font-bold mb-2 sm:mb-0">Codzy</h1>
        <button
          onClick={HLogout}
          aria-label="Logout"
          className="px-4 py-2 text-sm font-bold text-white bg-red-800 rounded-full shadow-md hover:bg-red-500 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;

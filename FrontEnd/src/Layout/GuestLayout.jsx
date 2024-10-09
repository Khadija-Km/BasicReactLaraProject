import { Link, Outlet,useNavigate } from 'react-router-dom';
import {AdminDashboard_Path} from'../router/index';
import { useEffect } from 'react';
import {useUserContext} from '../context/UserContext';
function GuestLayout() {
    const navigate =useNavigate()
    const context=useUserContext()
    useEffect(()=>{
        if(context.authenticated){
            navigate(AdminDashboard_Path)
        }
    },[]);
  return (
    <div>
      <header>
        <div className="items-center justify-between flex bg-gray-800 bg-opacity-90 px-12 py-4 mb-4 mx-auto shadow-2xl">
          <div className="text-2xl text-white font-semibold inline-flex items-center">
          <img className="h-16 w-auto mr-4" src="logo.jpeg" alt="logo" />
          <h1>GESTION DE PARC-AUTO</h1>
          </div>
          <div>
            <ul className='flex text-white'>
              <li className='ml-5 px-2 py-1'><Link to={'/'}>Accueil</Link></li>
              <li className='ml-5 px-2 py-1 rounded font-semibold bg-gray-100 text-gray-800'><Link to={'/Login'}>Se connecter</Link></li>
            </ul>
          </div>
        </div>
      </header>
      <main className={'container'}>
        <Outlet />
      </main>
    </div>
  );
}

export default GuestLayout;
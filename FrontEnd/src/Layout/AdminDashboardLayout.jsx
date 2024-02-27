import { Link, Outlet} from 'react-router-dom';
import {LOGIN_ROUTE} from'../router/index';
import { useEffect} from 'react';
import {useUserContext} from '../context/UserContext';
import AdminApi from '../services/Api/Adminn/AdminApi';
import { useNavigate } from 'react-router-dom';
import AdminDropDownMenu from './AdminDropDownMenu';
import {AdminDashboard_Path} from '../router/index';


function AdminDashboardLayout() {
    const navigate =useNavigate()
    const {setUser,setAuthenticated,logout}=useUserContext()
    useEffect(() => {
        AdminApi.getUser().then(({ data }) => {
            setUser(data)
            setAuthenticated(true)

        }).catch(() => {
            logout()
            navigate(LOGIN_ROUTE)
        });
    }, []);

  return (
    <div>
      <header>
        <div className="items-center justify-between flex bg-gray-800 bg-opacity-90 px-12 py-4 mb-4 mx-auto shadow-2xl">
          <div className="text-2xl text-white font-semibold inline-flex items-center">
          <img className="h-16 w-auto mr-4" src="logo.jpeg" alt="logo" />
          <h1>GESTION DE PARC-AUTO</h1>
          </div>
          <div>
            <ul className='flex text-white place-items-center'>
              <li className='ml-5 px-2 py-1'><Link to={AdminDashboard_Path}>Tableau de bord</Link></li>
              <li className='ml-5 px-2 py-1'>
                <AdminDropDownMenu/>
                </li>

            </ul>
          </div>
        </div>
      </header>
      <main className={'container'}>
        <div><Outlet /></div>
      </main>
    </div>
  );
}

export default AdminDashboardLayout;


import {createBrowserRouter} from "react-router-dom";
import Home from "../components/Home.jsx";
import Login from "../components/Login.jsx";
import ListeVehicules from "../components/ListeVehicules.jsx";
import Chauffeur from "../components/Chauffeur.jsx";
import Vignettes from "../components/Vignettes.jsx";
import Assurances from "../components/Assurances.jsx";
import Maintenance from "../components/Maintenance.jsx";
import NotFoundPage from "../components/NotFoundPage.jsx";
import Layout from '../Layout/Layout.jsx';
import AdminDashboard  from '../components/AdminDashboard.jsx';
import GuestLayout from'../Layout/GuestLayout.jsx';
import AdminDashboardLayout from '../Layout/AdminDashboardLayout.jsx'
import CRUD1 from "../components/CRUD1.jsx";
import CRUD2 from "../components/CRUD2.jsx";
import CRUD3 from "../components/CRUD3.jsx";
import CRUD4 from "../components/CRUD4.jsx";
import CRUD5 from "../components/CRUD5.jsx";
import CRUD6 from "../components/CRUD6.jsx";
import Edit1 from "../components/Edit1.jsx";
import Edit2 from "../components/Edit2.jsx";
import Edit3 from "../components/Edit3.jsx";
import Edit4 from "../components/Edit4.jsx";
import Edit5 from "../components/Edit5.jsx";
import Edit6 from "../components/Edit6.jsx";
export const LOGIN_ROUTE = '/login'
export const AdminDashboard_Path = '/AdminDashboard';


//path="/ListeVehicules" element={<ListeVehicules />}
//path="/Vignettes" element={<Vignettes />}
//path="/Maintenance" element={<Maintenance />}
//path="/Mision" element={<Mision />}
export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '*',
            element: <NotFoundPage/>
        },
        ]
    },
    {
        element: <GuestLayout/>,
        children: [
        {
            path: LOGIN_ROUTE,
            element: <Login/>
        },
        ]
    },
    {
        element: <AdminDashboardLayout/>,
        children: [
        {
            path: AdminDashboard_Path,
            element: <AdminDashboard/>
        },
        {
            path: "/ListeVehicules",
            element: <ListeVehicules/>
        },
        {
            path: "/Chauffeur",
            element: <Chauffeur/>
        },
        {
            path: "/Vignettes",
            element: <Vignettes/>
        },
        {
            path: "/Assurances",
            element: <Assurances/>
        },
        {
            path: "/Maintenance",
            element: <Maintenance/>
        },
        {
            path: "/Formulaire1",
            element: <CRUD1/>
        },
        {
            path: "/Formulaire2",
            element: <CRUD2/>
        },
        {
            path: "/Formulaire3",
            element: <CRUD3/>
        },
        {
            path: "/Formulaire4",
            element: <CRUD4/>
        },
        {
            path: "/Formulaire5",
            element: <CRUD5/>
        },
        {
            path: "/Formulaire6",
            element: <CRUD6/>
        },
        {
            path: "/Edit1/:id",
            element: <Edit1/>
        },
        {
            path: "/Edit2/:id",
            element: <Edit2/>
        },
        {
            path: "/Edit3/:id",
            element: <Edit3/>
        },
        {
            path: "/Edit4/:id",
            element: <Edit4/>
        },
        {
            path: "/Edit5/:id",
            element: <Edit5/>
        },
        {
            path: "/Edit6/:id",
            element: <Edit6/>
        }
        ]
    },

    ])



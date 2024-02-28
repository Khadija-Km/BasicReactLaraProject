
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
import Agence from '../components/Agence.jsx';
import Garage from "../components/Garage.jsx";
import CRUD1 from "../components/CRUD1.jsx";
import CRUD2 from "../components/CRUD2.jsx";
import CRUD3 from "../components/CRUD3.jsx";
import CRUD4 from "../components/CRUD4.jsx";
import CRUD5 from "../components/CRUD5.jsx";
import CRUD6 from "../components/CRUD6.jsx";
import CRUD7 from "../components/CRUD7.jsx";
import CRUD8 from "../components/CRUD8.jsx";
import Edit1 from "../components/Edit1.jsx";
import Edit2 from "../components/Edit2.jsx";
import Edit3 from "../components/Edit3.jsx";
import Edit4 from "../components/Edit4.jsx";
import Edit5 from "../components/Edit5.jsx";
import Edit6 from "../components/Edit6.jsx";
import Edit7 from "../components/Edit7.jsx";
import Edit8 from "../components/Edit8.jsx";
export const LOGIN_ROUTE = '/login'
export const AdminDashboard_Path = '/AdminDashboard';

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
            path: "/Agence",
            element: <Agence/>
        },
        {
            path: "/Garage",
            element: <Garage/>
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
            path: "/Formulaire7",
            element: <CRUD7/>
        },
        {
            path: "/Formulaire8",
            element: <CRUD8/>
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
        },
        {
            path: "/Edit7/:id",
            element: <Edit7/>
        },
        {
            path: "/Edit8/:id",
            element: <Edit8/>
        }
        ]
    },

    ])



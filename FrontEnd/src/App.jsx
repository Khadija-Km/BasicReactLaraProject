
import { RouterProvider } from 'react-router-dom';
import {router} from './router/index.jsx';
import './App.css';
import UserContext from './context/UserContext.jsx';
function App() {
    return (
        <>
            <UserContext>
            <RouterProvider router={router}/>
            </UserContext>

        </>
    )
}

export default App;




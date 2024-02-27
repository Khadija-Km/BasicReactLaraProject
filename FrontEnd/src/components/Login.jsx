import {AdminLogin} from "./Admin/AdminLogin";

function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-center text-xl font-bold mb-4">Admin Se connecter</h1>
                <AdminLogin />
            </div>
        </div>
    );
}

export default Login;



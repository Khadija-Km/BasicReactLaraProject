import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form.jsx";
import { Button } from "../ui/button.jsx";
import { Input } from "../ui/input.jsx";
import { useUserContext } from '../../context/UserContext.jsx';
import { useNavigate } from 'react-router-dom';
import { AdminDashboard_Path } from "../../router/index.jsx";
import { Loader } from 'lucide-react';
import AdminApi from "../../services/Api/Adminn/AdminApi.js";

const formSchema = z.object({
    email: z.string().email().min(2).max(50),
    password: z.string().min(8).max(30),
});

const AdminLogin = () => {
const { login, setAuthenticated } = useUserContext();
const navigate = useNavigate(); // Utilisez useNavigate à l'intérieur du composant
const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email: 'admin@admin.com',
        password: 'admin@admin',
    }
});
const { setError: setFormError } = form;
const onSubmit = async (values) => {
    await login(values.email, values.password)
        .then((response) => {
        if (response.status === 204) {
        AdminApi.getUser();
        setAuthenticated(true);
        navigate(AdminDashboard_Path);
        }
    })
    .catch((error) => {
        etFormError('email', {
        message: 'Erreur lors de la connexion. Veuillez réessayer.',
        });
    });
};

return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
            <FormItem>
                <FormLabel>email</FormLabel>
                <FormControl>
                <Input placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                <Input type={'password'} placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />
        <Button disabled={form.formState.isSubmitting} type="submit">
            {form.formState.isSubmitting && <Loader className={'mx-2 my-2 animate-spin'} />}{''}
            Se connecter
        </Button>
        </form>
    </Form>
    );
};
export { AdminLogin };



import { Button } from '../components/ui/button';
import { DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuSeparator,DropdownMenuItem,DropdownMenuShortcut} from '../components/ui/dropdown-menu';
import {User,LogOut} from'lucide-react';
import { useNavigate } from 'react-router-dom';
import {useUserContext} from '../context/UserContext';
import AdminApi from '../services/Api/Adminn/AdminApi';
import {LOGIN_ROUTE} from'../router/index';
export default function AdminDropDownMenu(){
    const navigate =useNavigate()
    const {logout}=useUserContext()
    const logoutCallback = async()=>{
        AdminApi.logout().then(()=>{
            logout()
            navigate(LOGIN_ROUTE)
        })
    }
    return <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button > <User className="mr-2 h-4 w-4"/>Admin</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logoutCallback}>
        <LogOut className='mr-2 h-4 w-4'/>
          <span>Se Déconnecter</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </>
}

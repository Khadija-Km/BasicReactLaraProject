import { cn } from "@/lib/utils";
import { Button } from "../components/ui/button";
import { Link } from 'react-router-dom';
import { AdminDashboard_Path } from '../router/index';
import {Car,Clock,User,Tag,Shield,Wrench} from'lucide-react';
export function Sidebar({ className }) {
  return (
    <div className={cn("pb-12 bg-gray-200", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Menu
          </h2>
          <div className="space-y-1">
            <Link to={AdminDashboard_Path}><Button variant="ghost" className="w-full justify-start">
            <Clock className='mr-2 h-4 w-4'/>
            Mission
            </Button></Link>
            <Link to={'/ListeVehicules'}><Button variant="ghost" className="w-full justify-start">
            <Car className='mr-2 h-4 w-4'/>
            Liste Véhicules
            </Button></Link>
            <Link to={'/chauffeur'}>
            <Button variant="ghost" className="w-full justify-start">
            <User className='mr-2 h-4 w-4'/>
            Chauffeurs
            </Button>
            </Link>
            <Link to={'/Vignettes'}>
            <Button variant="ghost" className="w-full justify-start">
            <Tag className='mr-2 h-4 w-4'/>
            Vignettes
            </Button>
            </Link>
            <Link  to={'/Assurances'}>
            <Button variant="ghost" className="w-full justify-start">
            <Shield className='mr-2 h-4 w-4'/>
            Assurances
            </Button>
            </Link>
            <Link to={'/Maintenance'}>
            <Button variant="ghost" className="w-full justify-start">
            <Wrench className='mr-2 h-4 w-4'/>
            Maintenance
            </Button>
            </Link>
            <Link to={'/Agence'}>
            <Button variant="ghost" className="w-full justify-start">
            <Shield className='mr-2 h-4 w-4'/>
            Agences
            </Button>
            </Link>
            <Link to={'/Garage'}>
            <Button variant="ghost" className="w-full justify-start">
            <Car className='mr-2 h-4 w-4'/>
            Garages
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

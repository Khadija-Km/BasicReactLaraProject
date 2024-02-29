import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import{AdminDashboard_Path} from '../router/index'
import AdminApi from "../services/Api/Adminn/AdminApi.js";
function CRUD1() {
    const navigate=useNavigate("");
    const params = useParams()
    const {id} = params
    const [chauffeurs, setChauffeurs] = useState([]);
    const [Vehicules, setVehicules] = useState([]);
    const[date,SetDate]=useState("");
    const[mission,SetMission]=useState("");
    const[service,SetService]=useState("");
    const[immatriculation,SetImmatriculation]=useState("");
    const[chauffeur,SetChauffeur]=useState("");
    const[destination,SetDestination]=useState('');
    const[ville,SetVille]=useState("");


    useEffect(() => {
        const getChauffeurAndHistoriqus = async ()=>{
            try{
                const {data} =await AdminApi.getChauffeurs()
                setChauffeurs(data)
                const VehiculesResponse = await AdminApi.getVehicules();
                console.log(VehiculesResponse)
                setVehicules(VehiculesResponse.data)
            }catch (error)
            {
                console.error(error)
            }
        }

        getChauffeurAndHistoriqus()
        fetchHistorique()
    }, []);

    const fetchHistorique = async()=>{
        await axios.get('http://localhost:8000/api/Historiques/'+id)
            .then((data)=>{
                console.log(data)
                const {date,mission,service,immatriculation,chauffeur_id,destination,ville_id}=data.data.Historique
                SetDate(date)
                SetMission(mission)
                SetService(service)
                SetImmatriculation(immatriculation)
                SetChauffeur(chauffeur_id)
                SetDestination(destination)
                SetVille(ville_id)
            }).catch(({response:data})=>{
                console.log(data.message)
            })
    }

    const UpdateHistorique = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('_method','PUT')
        formData.append('date',date)
        formData.append('mission',mission)
        formData.append('service',service)
        formData.append('immatriculation',immatriculation)
        formData.append('chauffeur_id',chauffeur)
        formData.append('destination',destination)
        formData.append('ville_id',ville)
        await axios.post('http://127.0.0.1:8000/api/Historiques/'+id,formData)
            .then(({data})=>{
                console.log(data.message)
                navigate(AdminDashboard_Path)
            }).catch(({response})=>{
                if(response.status==422){
                    console.log(response.data.errors)
                }else{
                    console.log(response.data.message)
                }
            })
    }
    return (
        <div className="flex">

            <div className={'w-100 md:w-1/4'}>
                <Sidebar />
            </div>
            <div className={'w-100 md:w-3/4'}>
                <div className="p-4">
                    <h2 className="text-2xl mb-4">editer une Mission</h2>
                    <form onSubmit={UpdateHistorique}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">
                                Date:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="Date"
                                value={date}
                                onChange={(e)=>{SetDate(e.target.value)}}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Mission:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={mission}
                                onChange={(e)=>{SetMission(e.target.value)}}
                                type="text"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Devision/service:
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={service}
                                onChange={(e)=>{SetService(e.target.value)}}
                                type="text"
                            >
                                <option value="Division des affaires pédagogiques">Division des affaires pédagogiques</option>
                                <option value="Division de la planification et de la carte scolaire">Division de la planification et de la carte scolaire</option>
                                <option value="Division de la gestion des ressources haumaine">Division de la gestion des ressources haumaine</option>
                                <option value="Division de la gestion des ressources haumaines">Division de la gestion des ressources haumaines</option>
                                <option value="Division des affaires administratives et financières">Division des affaires administratives et financières</option>
                                <option value="Centre régional du système d'informatique">Centre régional du système d'informatique</option>
                                <option value="Unité régionale d'audit">Unité régionale d'audit</option>
                                <option value="Centre régional des examens">Centre régional des examens</option>
                                <option value="Centre régional d'orientation et scolaire professionnelle">Centre régional d'orientation et scolaire professionnelle</option>
                                <option  value="Service des affaires juridiques et des partenariats">Service des affaires juridiques et des partenariats</option>
                                <option value="Service de la communication et du suivi">Service de la communication et du suivi</option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>
                        <div className="mb-4">
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Immatriculation-Auto:
                            </label>
                            <select value={immatriculation} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={(e)=>{SetImmatriculation(e.target.value)}}>
                                <option value={""}>select immatriculation</option>
                                {Vehicules?.map((vehicule , key)=>(
                                    <option key={key} value={vehicule?.immatriculation}>{vehicule?.immatriculation}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Chauffeur:
                            </label>
                            <select
                                value={chauffeur}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                onChange={(e)=>{SetChauffeur(e.target.value)}}>
                                <option value={""}>select chauffeur</option>
                                {chauffeurs?.map((chauffeur, key) => (
                                    <option key={key} value={chauffeur?.id}>{chauffeur?.nom}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Destination:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={destination}
                                onChange={(e) => {
                                    SetDestination(e.target.value)
                                }}
                                type="text"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Ville:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={ville}
                                onChange={(e)=>{SetVille(e.target.value)}}
                                type="text"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <Button type='submit'>Enregistrer</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CRUD1;


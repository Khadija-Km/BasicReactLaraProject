import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import{AdminDashboard_Path} from '../router/index'
function CRUD1() {
    const navigate=useNavigate("");
    const[date,SetDate]=useState("");
    const[mission,SetMission]=useState("");
    const[service,SetService]=useState("");
    const[automobile,SetAutomobile]=useState("");
    const[immatriculation,SetImmatriculation]=useState("");
    const[chauffeur,SetChauffeur]=useState("");
    const[destination,SetDestination]=useState('');
    const[ville,SetVille]=useState("");

    const createHistorique = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('date',date)
        formData.append('mission',mission)
        formData.append('service',service)
        formData.append('automobile',automobile)
        formData.append('immatriculation',immatriculation)
        formData.append('chauffeur',chauffeur)
        formData.append('destination',destination)
        formData.append('ville',ville)
        await axios.post('http://localhost:8000/api/Historiques',formData)
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
          <h2 className="text-2xl mb-4">Ajouter une Mission</h2>
          <form onSubmit={createHistorique}>
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Automobile:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={automobile}
                onChange={(e)=>{SetAutomobile(e.target.value)}}
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Immatriculation-Auto:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={immatriculation}
                onChange={(e)=>{SetImmatriculation(e.target.value)}}
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Chauffeur:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={chauffeur}
                onChange={(e)=>{SetChauffeur(e.target.value)}}
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Destination:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={destination}
                onChange={(e)=>{SetDestination(e.target.value)}}
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


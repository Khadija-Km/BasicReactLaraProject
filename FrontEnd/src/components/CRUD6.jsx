import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function CRUD6() {
    const navigate=useNavigate("");
    const[typemaintenance,SetTypemaintenance]=useState("");
    const[montant,SetMontant]=useState("");
    const[date,SetDate]=useState("");
    const[ngarage,SetNgarage]=useState("");
    const[nomgarage,SetNomgarage]=useState("");
    const[Adresse,SetAdresse]=useState("");
    const[Telephone,SetTelephone]=useState("");
    const[automobile,SetAutomobile]=useState("");
    const[immatriculation,SetImmatriculation]=useState("");
    const createMaintenace = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('typemaintenance',typemaintenance)
        formData.append('montant',montant)
        formData.append('date',date)
        formData.append('ngarage',ngarage)
        formData.append('nomgarage',nomgarage)
        formData.append('Adresse',Adresse)
        formData.append('Telephone',Telephone)
        formData.append('automobile',automobile)
        formData.append('immatriculation',immatriculation)
        await axios.post('http://localhost:8000/api/Maintenances',formData)
        .then(({data})=>{
            console.log(data.message)
            navigate("/Maintenance")
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
          <h2 className="text-2xl mb-4">Ajouter une Maintenance</h2>
          <form onSubmit={createMaintenace}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">
              Type Maintenance:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={typemaintenance}
                onChange={(e)=>{SetTypemaintenance(e.target.value)}}
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Montant:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={montant}
                onChange={(e)=>{SetMontant(e.target.value)}}
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
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
              N_Garage:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={ngarage}
                onChange={(e)=>{SetNgarage(e.target.value)}}
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Nom_Garage:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={nomgarage}
                onChange={(e)=>{SetNomgarage(e.target.value)}}
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Adresse:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={Adresse}
                onChange={(e)=>{SetAdresse(e.target.value)}}
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Telephone:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={Telephone}
                onChange={(e)=>{SetTelephone(e.target.value)}}
                type="tel"
              />
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
                Immat-Auto:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={immatriculation}
                onChange={(e)=>{SetImmatriculation(e.target.value)}}
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

export default CRUD6;

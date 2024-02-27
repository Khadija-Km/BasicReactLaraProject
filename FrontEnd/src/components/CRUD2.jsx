import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function CRUD2() {
    const navigate=useNavigate("");
    const[immatriculation,SetImmatriculation]=useState("");
    const[categorie,SetCategorie]=useState("");
    const[marque,SetMarque]=useState("");
    const[carburant,SetCarburant]=useState("");
    const[nplace,SetNplace]=useState("");
    const[ngrise,SetNgrise]=useState("");
    const[enpanne,SetEnpanne]=useState('');

    const createVehicule = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('immatriculation',immatriculation)
        formData.append('categorie',categorie)
        formData.append('marque',marque)
        formData.append('carburant',carburant)
        formData.append('nplace',nplace)
        formData.append('ngrise',ngrise)
        formData.append('enpanne',enpanne)
        await axios.post('http://localhost:8000/api/Vehicules',formData)
        .then(({data})=>{
            console.log(data.message)
            navigate("/ListeVehicules")
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
          <h2 className="text-2xl mb-4">Ajouter une Véhicule</h2>
          <form onSubmit={createVehicule}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">
                Immatriculation:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={immatriculation}
                onChange={(e)=>{SetImmatriculation(e.target.value)}}
                type="texte"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Categorie:
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={categorie}
                onChange={(e)=>{SetCategorie(e.target.value)}}
              >
                <option value="camion">camion</option>
                <option value="Voiture">Voiture</option>
                <option value="Mini-Bus">Mini-Bus</option>
                <option value="Bus">Bus</option>
                <option value="Moto">Moto</option>
                <option value="Autre">Autre</option>
                </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Marque:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={marque}
                onChange={(e)=>{SetMarque(e.target.value)}}
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Marque Carburant:
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={carburant}
                onChange={(e)=>{SetCarburant(e.target.value)}}
              >
                <option value='essence'>essence</option>
                <option  value='Diesel'>Diesel</option>
                </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Nombre de place:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={nplace}
                onChange={(e)=>{SetNplace(e.target.value)}}
                type="number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Nombre de carte gris:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={ngrise}
                onChange={(e)=>{SetNgrise(e.target.value)}}
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                En panne:
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={enpanne}
                onChange={(e)=>{SetEnpanne(e.target.value)}}
              >
                <option value='Oui'>Oui</option>
                <option value='Non'>Non</option>
            </select>
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

export default CRUD2;

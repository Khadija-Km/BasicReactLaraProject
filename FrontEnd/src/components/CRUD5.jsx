import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function CRUD5() {
    const navigate=useNavigate("");
    const[nagence,SetNagence]=useState("");
    const[nomagence,SetNomagence]=useState("");
    const[adresse,SetAdresse]=useState("");
    const[telephone,SetTelephone]=useState("");
    const[duree,SetDuree]=useState("");
    const[immatriculation,SetImmatriculation]=useState("");
    const[Montant,SetMontant]=useState("");
    const createAssurance = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('nagence',nagence)
        formData.append('nomagence',nomagence)
        formData.append('adresse',adresse)
        formData.append('telephone',telephone)
        formData.append('duree',duree)
        formData.append('immatriculation',immatriculation)
        formData.append('Montant',Montant)
        await axios.post('http://localhost:8000/api/Assurances',formData)
        .then(({data})=>{
            console.log(data.message)
            navigate("/Assurances")
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
          <h2 className="text-2xl mb-4">Ajouter une Agence</h2>
          <form onSubmit={createAssurance}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">
                N_Agence:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={nagence}
                onChange={(e)=>{SetNagence(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Nom_Agence:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={nomagence}
                onChange={(e)=>{SetNomagence(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Adresse:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={adresse}
                onChange={(e)=>{SetAdresse(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Telephone:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="tel"
                value={telephone}
                onChange={(e)=>{SetTelephone(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Duree:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={duree}
                onChange={(e)=>{SetDuree(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Immat-Auto:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={immatriculation}
                onChange={(e)=>{SetImmatriculation(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Montant:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={Montant}
                onChange={(e)=>{SetMontant(e.target.value)}}
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

export default CRUD5;

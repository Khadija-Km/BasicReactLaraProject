import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function CRUD7() {
    const navigate=useNavigate("");
    const[Nagence,SetNagence]=useState("");
    const[Nomagence,SetNomagence]=useState("");
    const[Adresse,SetAdresse]=useState("");
    const[telephone,SetTelephone]=useState("");
    const createAgence = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('Nagence',Nagence)
        formData.append('Nomagence',Nomagence)
        formData.append('Adresse',Adresse)
        formData.append('telephone',telephone)
        await axios.post('http://localhost:8000/api/Agences',formData)
        .then(({data})=>{
            console.log(data.message)
            navigate("/Agence")
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
          <form onSubmit={createAgence}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">
              N_Agence:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={Nagence}
                onChange={(e)=>{SetNagence(e.target.value)}}
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Nom d'Agence:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={Nomagence}
                onChange={(e)=>{SetNomagence(e.target.value)}}
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Adresse:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={Adresse}
                onChange={(e)=>{SetAdresse(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Telephone:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={telephone}
                onChange={(e)=>{SetTelephone(e.target.value)}}
                type="tel"
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

export default CRUD7;

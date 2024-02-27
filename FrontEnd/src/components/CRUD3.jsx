import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function CRUD3() {
    const navigate=useNavigate("");
    const[cin,SetCin]=useState("");
    const[nom,SetNom]=useState("");
    const[prenom,SetPrenom]=useState("");
    const[naissance,SetNaissance]=useState("");
    const[gpermis,SetGpermis]=useState("");
    const[telephone,SetTelephone]=useState("");

    const createChauffeur = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('cin',cin)
        formData.append('nom',nom)
        formData.append('prenom',prenom)
        formData.append('naissance',naissance)
        formData.append('gpermis',gpermis)
        formData.append('telephone',telephone)
        await axios.post('http://localhost:8000/api/Chauffeurs',formData)
        .then(({data})=>{
            console.log(data.message)
            navigate("/Chauffeur")
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
          <h2 className="text-2xl mb-4">Ajouter un Chauffeur</h2>
          <form onSubmit={createChauffeur}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">
                CIN:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={cin}
                onChange={(e)=>{SetCin(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Nom:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={nom}
                onChange={(e)=>{SetNom(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Prenom:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={prenom}
                onChange={(e)=>{SetPrenom(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                La date de Naissance:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="Date"
                value={naissance}
                onChange={(e)=>{SetNaissance(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Genre de permis:
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={gpermis}
                onChange={(e)=>{SetGpermis(e.target.value)}}
              >
                <option value="A">A</option>
                <option value="A1">A1</option>
                <option value="B">B</option>
                <option value="BE">BE</option>
                <option value="C1">C1</option>
                <option value="C1E">C1E</option>
                <option value="C">C</option>
                <option value="CE">CE</option>
                <option value="D1">D1</option>
                <option value="D1E">D1E</option>
                <option value="D">D</option>
                <option value="DE">DE</option>
                </select>
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
            <div className="flex items-center justify-between">
              <Button type='submit'>Enregistrer</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CRUD3;

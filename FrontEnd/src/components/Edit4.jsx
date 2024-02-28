import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';
import axios from 'axios';
import { useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
function Edit4() {
    const navigate=useNavigate("");
    const{id}=useParams();
    const[date,SetDate]=useState("");
    const[nvignette,SetNvignette]=useState("");
    const[ndvignette,SetNdvignette]=useState("");
    const[benificiaire,SetBenificiaire]=useState("");
    const[service,SetService]=useState("");
    const[automobile,SetAutomobile]=useState("");
    const[Immatriculation,SetImmatriculation]=useState("");
    useEffect(()=>{
        fetchVignette();
    },[])
    const fetchVignette = async()=>{
        await axios.get('http://localhost:8000/api/Vignettes/'+id)
        .then((data)=>{
            console.log(data)
            const {date,nvignette,ndvignette,benificiaire,service,automobile,Immatriculation}=data.data.Vignette
            SetDate(date)
            SetNvignette(nvignette)
            SetNdvignette(ndvignette)
            SetBenificiaire(benificiaire)
            SetService(service)
            SetAutomobile(automobile)
            SetImmatriculation(Immatriculation)
        }).catch(({response:data})=>{
            console.log(data.message)
        })
    }
    const UpdateVignette = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('_method','PUT')
        formData.append('date',date)
        formData.append('nvignette',nvignette)
        formData.append('ndvignette',ndvignette)
        formData.append('benificiaire',benificiaire)
        formData.append('service',service)
        formData.append('automobile',automobile)
        formData.append('Immatriculation',Immatriculation)
        await axios.post('http://127.0.0.1:8000/api/Vignettes/'+id,formData)
        .then(({data})=>{
            console.log(data.message)
            navigate("/Vignettes")
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
          <h2 className="text-2xl mb-4">Modifier une Vignette</h2>
          <form onSubmit={UpdateVignette}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">
                Date:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="Date"
                defaultValue={date}
                name='date'
                onChange={(e)=>{SetDate(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                N Vignette:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name='nvignette'
                defaultValue={nvignette}
                onChange={(e)=>{SetNvignette(e.target.value)}}
                placeholder="Vignette"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Montant Vignette:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name='ndvignette'
                defaultValue={ndvignette}
                onChange={(e)=>{SetNdvignette(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Benificiaire:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                defaultValue={benificiaire}
                name='benificiaire'
                onChange={(e)=>{SetBenificiaire(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Devision/Service:
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name='service'
                defaultValue={service}
                onChange={(e)=>{SetService(e.target.value)}}
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
                type="text"
                defaultValue={automobile}
                name='automobile'
                onChange={(e)=>{SetAutomobile(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Imma-Auto:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                defaultValue={Immatriculation}
                name='Immatriculation'
                onChange={(e)=>{SetImmatriculation(e.target.value)}}
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

export default Edit4;

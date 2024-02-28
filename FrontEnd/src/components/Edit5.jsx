import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';
import axios from 'axios';
import { useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
function Edit5() {
    const navigate=useNavigate("");
    const{id}=useParams();
    const[nagence,SetNagence]=useState("");
    const[nomagence,SetNomagence]=useState("");
    const[adresse,SetAdresse]=useState("");
    const[telephone,SetTelephone]=useState("");
    const[duree,SetDuree]=useState("");
    const[automobile,SetAutomobile]=useState("");
    const[immatriculation,SetImmatriculation]=useState("");
    const[Montant,SetMontant]=useState("");

    useEffect(()=>{
        fetchAssurance();
    },[])
    const fetchAssurance = async()=>{
        await axios.get('http://localhost:8000/api/Assurances/'+id)
        .then((data)=>{
            console.log(data)
            const {nagence,nomagence,adresse,telephone,duree,automobile,immatriculation,Montant}=data.data.Assurance
            SetNagence(nagence)
            SetNomagence(nomagence)
            SetAdresse(adresse)
            SetTelephone(telephone)
            SetDuree(duree)
            SetAutomobile(automobile)
            SetImmatriculation(immatriculation)
            SetMontant(Montant)
        }).catch(({response:data})=>{
            console.log(data.message)
        })
    }
    const UpdateAssurance = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('_method','PUT')
        formData.append('nagence',nagence)
        formData.append('nomagence',nomagence)
        formData.append('adresse',adresse)
        formData.append('telephone',telephone)
        formData.append('duree',duree)
        formData.append('automobile',automobile)
        formData.append('immatriculation',immatriculation)
        formData.append('Montant',Montant)
        await axios.post('http://127.0.0.1:8000/api/Assurances/'+id,formData)
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
          <h2 className="text-2xl mb-4">Modifier une Agence</h2>
          <form onSubmit={UpdateAssurance}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">
                N_Agence:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                defaultValue={nagence}
                name='nagence'
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
                name='nomagence'
                defaultValue={nomagence}
                onChange={(e)=>{SetNomagence(e.target.value)}}
                placeholder="Nom_Agence"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Adresse:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name='adresse'
                defaultValue={adresse}
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
                name='telephone'
                defaultValue={telephone}
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
                name='duree'
                defaultValue={duree}
                onChange={(e)=>{SetDuree(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Automobile:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name='automobile'
                defaultValue={automobile}
                onChange={(e)=>{SetAutomobile(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Immat-Auto:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name='immatriculation'
                defaultValue={immatriculation}
                onChange={(e)=>{SetImmatriculation(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Montant:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={Montant}
                name='Montant'
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

export default Edit5;

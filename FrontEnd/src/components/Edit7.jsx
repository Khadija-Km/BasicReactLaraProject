import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';
import axios from 'axios';
import { useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
function Edit7() {
    const navigate=useNavigate("");
    const{id}=useParams();
    const[Nagence,SetNagence]=useState("");
    const[Nomagence,SetNomagence]=useState("");
    const[Adresse,SetAdresse]=useState("");
    const[telephone,SetTelephon]=useState("");
    useEffect(()=>{
        fetchMaintenace();
    },[])
    const fetchMaintenace = async()=>{
        await axios.get('http://localhost:8000/api/Agences/'+id)
        .then((data)=>{
            console.log(data)
            const {Nagence,Nomagence,Adresse,telephone}=data.data.Agence
            SetNagence(Nagence)
            SetNomagence(Nomagence)
            SetAdresse(Adresse)
            SetTelephon(telephone)
        }).catch(({response:data})=>{
            console.log(data.message)
        })
    }
    const UpdateAgence = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('_method','PUT')
        formData.append('Nagence',Nagence)
        formData.append('Nomagence',Nomagence)
        formData.append('Adresse',Adresse)
        formData.append('telephone',telephone)
        await axios.post('http://127.0.0.1:8000/api/Agences/'+id,formData)
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
          <h2 className="text-2xl mb-4">Modifier une Maintenance</h2>
          <form onSubmit={UpdateAgence}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">
            N_Agence:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={Nagence}
                name='Nagence'
                onChange={(e)=>{SetNagence(e.target.value)}}
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Nom d'agence:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={Nomagence}
                name='Nomagence'
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
                defaultValue={Adresse}
                name='Adresse'
                onChange={(e)=>{SetAdresse(e.target.value)}}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Telephone:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={telephone}
                name='telephone'
                onChange={(e)=>{SetTelephon(e.target.value)}}
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

export default Edit7;

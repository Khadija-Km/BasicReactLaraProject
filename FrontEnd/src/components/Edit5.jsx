import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import AdminApi from "../services/Api/Adminn/AdminApi.js";
function CRUD5() {
    const navigate=useNavigate("");
    const[nagence,SetNagence]=useState("");
    const params = useParams()
    const {id} = params
    const[duree,SetDuree]=useState("");
    const [vehicules, setVehicules] = useState([]);
    const [agences, setAgences] = useState();
    const[immatriculation,SetImmatriculation]=useState("");
    const[Montant,SetMontant]=useState("");

    useEffect(() => {
        const getChauffeurAndHistoriqus = async ()=>{
            try{
                const VehiculesResponse = await AdminApi.getVehicules();
                setVehicules(VehiculesResponse.data)
                const {data} = await AdminApi.getAgences();
                setAgences(data)
            }catch (error)
            {
                console.error(error)
            }
        }

        getChauffeurAndHistoriqus()
        fetchAssurance()
    }, []);
    const fetchAssurance = async()=>{
        await axios.get('http://localhost:8000/api/Assurances/'+id)
            .then((data)=>{
                console.log(data)
                const {Nagence,duree,immatriculation,Montant}=data.data.Assurance
                SetNagence(Nagence)
                SetDuree(duree)
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
        formData.append('duree',duree)
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
                    <h2 className="text-2xl mb-4">edit une assurance</h2>
                    <form onSubmit={UpdateAssurance}>
                        <select
                            value={nagence}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={(e) => {
                                SetNagence(e.target.value)
                            }}>
                            <option value={""}>select agence</option>
                            {agences?.map((agence, key) => (
                                <option key={key} value={agence?.Nagence}>{agence?.Nomagence}</option>
                            ))}
                        </select>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Duree:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                value={duree}
                                onChange={(e) => {
                                    SetDuree(e.target.value)
                                }}
                            />
                        </div>

                        <select
                            value={immatriculation}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={(e) => {
                                SetImmatriculation(e.target.value)
                            }}>
                            <option value={""}>select immatriculation</option>
                            {vehicules?.map((vehicule, key) => (
                                <option key={key} value={vehicule?.immatriculation}>{vehicule?.immatriculation}</option>
                            ))}
                        </select>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Montant:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={Montant}
                                onChange={(e) => {
                                    SetMontant(e.target.value)
                                }}
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

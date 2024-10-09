import { Link } from 'react-router-dom';
import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';
import axios from 'axios';
import {useState,useEffect} from 'react';
function Agence() {
    const [agences,setAgence]= useState([])
    useEffect(()=>{
        fetchagence();
    },[])

    const fetchagence = async()=>{
        await axios.get('http://localhost:8000/api/Agences')
        .then(({data})=>{
            setAgence(data)
        })
    }
    const handlePrint = () => {
        window.print();
    };
    const deleteAgence = async (id) => {
        const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cette agence ?");
        if (isConfirmed) {
          await axios
            .delete(`http://localhost:8000/api/Agences/${parseInt(id)}`)
            .then(({ data }) => {
              console.log(id);
              console.log(data.message);
              fetchagence();
            })
            .catch(({ response: data }) => {
              console.log(data.message);
            });
        }
      }
    return (
    <div>
<div className="flex">
<div className={'w-100 md:w-1/4'}>
    <Sidebar/>
</div>
<div className={'w-100 md:w-3/4'}>
<div className="p-4">
<h1 className="text-3xl font-bold mb-4">Liste des Agences</h1>
          <Link to="/Formulaire7">
            <Button className="mb-4">Ajouter</Button>
          </Link>
          <Button onClick={handlePrint} className="mb-4 ml-4">Imprimer</Button>
          <table className="table-auto border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border px-2 py-2">N_agence</th>
                <th className="border px-2 py-2">Nom d'agence</th>
                <th className="border px-2 py-2">Adresse</th>
                <th className="border px-2 py-2">Telephone</th>
                <th className="border px-2 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
                {
                     agences.length>0 && (
                        agences.map((agence,index)=>(
                            <tr className="bg-gray-100" key={index}>
                <td className="border px-2 py-2">{agence.Nagence}</td>
                <td className="border px-2 py-2">{agence.Nomagence}</td>
                <td className="border px-2 py-2">{agence.Adresse}</td>
                <td className="border px-2 py-2">{agence.telephone}</td>
                <td className="border px-2 py-2 flex justify-between">
                <Link to={`/Edit7/${agence.id}`}><Button className="mr-1">Modifier</Button></Link>
                  <Button onClick={()=>deleteAgence(agence.id)}>Supprimer</Button>
                </td>
              </tr>
                        ))
                     )
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
</div>

    );
}
export default Agence;

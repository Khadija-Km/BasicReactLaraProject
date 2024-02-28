import { Link } from 'react-router-dom';
import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';
import axios from 'axios';
import {useState,useEffect} from 'react';
function Assurances() {
    const [assurances,setAssurances]= useState([]);
    useEffect(()=>{
        fetchAssurances();
    },[])

    const fetchAssurances = async()=>{
        await axios.get('http://localhost:8000/api/Assurances')
        .then(({data})=>{
            setAssurances(data)
        })
    }
    const deleteAssurance = async (id) => {
        const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cette Assurance?");
        if (isConfirmed) {
          await axios
            .delete(`http://localhost:8000/api/Assurances/${parseInt(id)}`)
            .then(({ data }) => {
              console.log(id);
              console.log(data.message);
              fetchAssurances();
            })
            .catch(({ response: data }) => {
              console.log(data.message);
            });
        }
      }
    const handlePrint = () => {
        window.print();
    };

return (
<div>
<div className="flex">
<div className={'w-100 md:w-1/4'}>
    <Sidebar/>
</div>
<div className={'w-100 md:w-3/4'}>
<div className="p-4">
<h1 className="text-3xl font-bold text-center mb-4">Liste des Assurances</h1>
          <Link to="/Formulaire5">
            <Button className="mb-4">Ajouter</Button>
          </Link>
          <Button onClick={handlePrint} className="mb-4 ml-4">Imprimer</Button>
          <table className="table-auto border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border px-2 py-2">N_Agence</th>
                <th className="border px-2 py-2">Nom_Agence</th>
                <th className="border px-2 py-2">Adresse</th>
                <th className="border px-2 py-2">Telephone</th>
                <th className="border px-2 py-2">Durée</th>
                <th className="border px-2 py-2">Automobile</th>
                <th className="border px-2 py-2">Imm_Auto</th>
                <th className="border px-2 py-2">Montant</th>
                <th className="border px-2 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
                {
                    assurances.length>0 && (
                        assurances.map((assurance,index)=>(
                            <tr className="bg-gray-100" key={index}>
                <td className="border px-2 py-2">{assurance.nagence}</td>
                <td className="border px-2 py-2">{assurance.nomagence}</td>
                <td className="border px-2 py-2">{assurance.adresse}</td>
                <td className="border px-2 py-2">{assurance.telephone}</td>
                <td className="border px-2 py-2">{assurance.duree}</td>
                <td className="border px-2 py-2">{assurance.automobile}</td>
                <td className="border px-2 py-2">{assurance.immatriculation}</td>
                <td className="border px-2 py-2">{assurance.Montant}</td>
                <td className="border px-2 py-2 flex justify-between">
                <Link to={`/Edit5/${assurance.id}`}><Button className="mr-1">Modifier</Button></Link>
                  <Button onClick={()=>deleteAssurance(assurance.id)}>Supprimer</Button>
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

export default Assurances;

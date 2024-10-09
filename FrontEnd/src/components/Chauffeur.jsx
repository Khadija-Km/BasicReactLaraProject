import { Link } from 'react-router-dom';
import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';
import axios from 'axios';
import {useState,useEffect} from 'react';
function Chauffeur(){
const [chauffeurs,setChauffeurs]= useState([])
    useEffect(()=>{
        fetchchauffeurs();
    },[])

    const fetchchauffeurs = async()=>{
        await axios.get('http://localhost:8000/api/Chauffeurs')
        .then(({data})=>{
            setChauffeurs(data)
        })
    }
    const handlePrint = () => {
        window.print();
    };
    const deleteChauffeur = async (id) => {
        const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer ce Chauffeur ?");
        if (isConfirmed) {
          await axios
            .delete(`http://localhost:8000/api/Chauffeurs/${parseInt(id)}`)
            .then(({ data }) => {
              console.log(id);
              console.log(data.message);
              fetchchauffeurs();
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
<h1 className="text-3xl font-bold mb-4">Liste des Chauffeurs</h1>
          <Link to="/Formulaire3">
            <Button className="mb-4">Ajouter</Button>
          </Link>
          <Button onClick={handlePrint} className="mb-4 ml-4">Imprimer</Button>
          <table className="table-auto border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border px-2 py-2">CIN</th>
                <th className="border px-2 py-2">Nom</th>
                <th className="border px-2 py-2">Prenom</th>
                <th className="border px-2 py-2">Date de Naissance</th>
                <th className="border px-2 py-2">Genre de permis</th>
                <th className="border px-2 py-2">Telephone</th>
                <th className="border px-2 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
                {
                     chauffeurs.length>0 && (
                        chauffeurs.map((chauffeur,index)=>(
                            <tr className="bg-gray-100" key={index}>
                <td className="border px-2 py-2">{chauffeur.cin}</td>
                <td className="border px-2 py-2">{chauffeur.nom}</td>
                <td className="border px-2 py-2">{chauffeur.prenom}</td>
                <td className="border px-2 py-2">{chauffeur.naissance}</td>
                <td className="border px-2 py-2">{chauffeur.gpermis}</td>
                <td className="border px-2 py-2">{chauffeur.telephone}</td>
                <td className="border px-2 py-2 flex justify-between">
                <Link to={`/Edit3/${chauffeur.id}`}><Button className="mr-1">Modifier</Button></Link>
                  <Button onClick={()=>deleteChauffeur(chauffeur.id)}>Supprimer</Button>
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

export default Chauffeur;
import { Link } from 'react-router-dom';
import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';
import axios from 'axios';
import {useState,useEffect} from 'react';
function Garage() {
    const [garages,setGarage]= useState([])
    useEffect(()=>{
        fetchgarage();
    },[])

    const fetchgarage = async()=>{
        await axios.get('http://localhost:8000/api/Garages')
        .then(({data})=>{
            setGarage(data)
        })
    }
    const handlePrint = () => {
        window.print();
    };
    const deleteGarage = async (id) => {
        const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer ce Garage ?");
        if (isConfirmed) {
          await axios
            .delete(`http://localhost:8000/api/Garages/${parseInt(id)}`)
            .then(({ data }) => {
              console.log(id);
              console.log(data.message);
              fetchgarage();
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
<h1 className="text-3xl font-bold text-center mb-4">Liste des Agences</h1>
          <Link to="/Formulaire8">
            <Button className="mb-4">Ajouter</Button>
          </Link>
          <Button onClick={handlePrint} className="mb-4 ml-4">Imprimer</Button>
          <table className="table-auto border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border px-2 py-2">N_Garage</th>
                <th className="border px-2 py-2">Nom de Garage</th>
                <th className="border px-2 py-2">Adresse</th>
                <th className="border px-2 py-2">Telephone</th>
                <th className="border px-2 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
                {
                     garages.length>0 && (
                        garages.map((garage,index)=>(
                            <tr className="bg-gray-100" key={index}>
                <td className="border px-2 py-2">{garage.NGarage}</td>
                <td className="border px-2 py-2">{garage.Nomgarage}</td>
                <td className="border px-2 py-2">{garage.Adresse}</td>
                <td className="border px-2 py-2">{garage.telephone}</td>
                <td className="border px-2 py-2 flex justify-between">
                <Link to={`/Edit8/${garage.id}`}><Button className="mr-1">Modifier</Button></Link>
                  <Button onClick={()=>deleteGarage(garage.id)}>Supprimer</Button>
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
export default Garage;

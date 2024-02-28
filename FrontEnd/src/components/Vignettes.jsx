import { Link } from 'react-router-dom';
import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';
import axios from 'axios';
import {useState,useEffect} from 'react';
function Vignettes() {
    const [vignettes,setVignettes]= useState([])
    useEffect(()=>{
        fetchVignettes();
    },[])
    const fetchVignettes = async()=>{
        await axios.get('http://localhost:8000/api/Vignettes')
        .then(({data})=>{
            setVignettes(data)
        })
    }
    const deleteVignette = async (id) => {
      const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cette vignette ?");
      if (isConfirmed) {
        await axios
          .delete(`http://localhost:8000/api/Vignettes/${parseInt(id)}`)
          .then(({ data }) => {
            console.log(id);
            console.log(data.message);
            fetchVignettes();
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
                <Sidebar />
              </div>
              <div className={'w-100 md:w-3/4'}>
                <div className="p-4">
                <h1 className="text-3xl font-bold text-center mb-4">Liste des Vignettes</h1>
                  <Link to="/Formulaire4">
                    <Button className="mb-4">Ajouter</Button>
                  </Link>
                  <Button onClick={handlePrint} className="mb-4 ml-4">Imprimer</Button>

                  <table className="table-auto border-collapse border border-gray-400">
                    <thead>
                      <tr>
                        <th className="border px-2 py-2">Date</th>
                        <th className="border px-2 py-2">N Vignette</th>
                        <th className="border px-2 py-2">Montant Vignette</th>
                        <th className="border px-2 py-2">Benificiaire</th>
                        <th className="border px-2 py-2">Division/Service</th>
                        <th className="border px-2 py-2">Automobile</th>
                        <th className="border px-2 py-2">Immatricul-Auto</th>
                        <th className="border px-2 py-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            vignettes.length>0 && (
                                vignettes.map((vignette,index)=>(
                                    <tr className="bg-gray-100" key={index}>
                        <td className="border px-2 py-2">{vignette.date}</td>
                        <td className="border px-2 py-2">{vignette.nvignette}</td>
                        <td className="border px-2 py-2">{vignette.ndvignette}</td>
                        <td className="border px-2 py-2">{vignette.benificiaire}</td>
                        <td className="border px-2 py-2">{vignette.service}</td>
                        <td className="border px-2 py-2">{vignette.immatriculation}</td>
                        <td className="border px-2 py-2 flex justify-between">
                        <Link to={`/Edit4/${vignette.id}`}><Button className="mr-1">Modifier</Button></Link>
                          <Button onClick={()=>deleteVignette(vignette.id)}>Supprimer</Button>
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

export default Vignettes;

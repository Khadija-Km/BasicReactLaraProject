import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';

function ListeVehicules() {
    const [vehicules, setVehicules] = useState([]);


    useEffect(() => {
        fetchVehicules();
    }, []);

    const fetchVehicules = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/Vehicules');
            setVehicules(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const deleteVehicule = async (id) => {
        const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer ce véhicule ?");
        if (isConfirmed) {
            try {
                await axios.delete(`http://localhost:8000/api/Vehicules/${parseInt(id)}`);
                fetchVehicules();
            } catch (error) {
                console.error('Error deleting vehicle:', error);
            }
        }
    };

    return (
        <div>
            <div className="flex">
                <div className={'w-100 md:w-1/4'}>
                    <Sidebar />
                </div>
                <div className={'w-100 md:w-3/4'}>
                    <div className="p-4 flex justify-between">
                        <div>
                        <h1 className="text-3xl font-bold text-center mb-4">Liste des Véhecules</h1>
                            <Link to="/Formulaire2">
                                <Button className="mr-2">Ajouter</Button>
                            </Link>
                            <Button onClick={window.print} className="mr-2">Imprimer</Button>
                        </div>
                    </div>
                    <table id="table-to-xls" className="table-auto border-collapse border border-gray-400">
                        <thead>
                            <tr>
                                <th className="border px-2 py-2">Immatriculation</th>
                                <th className="border px-2 py-2">Categorie</th>
                                <th className="border px-2 py-2">Marque</th>
                                <th className="border px-2 py-2">Marque Carburant</th>
                                <th className="border px-2 py-2">Nombre de place</th>
                                <th className="border px-2 py-2">N Carte grise</th>
                                <th className="border px-2 py-2">En panne</th>
                                <th className="border px-2 py-2">Action</th>
                            </tr>
                            <tr style={{ display: 'none' }}>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {vehicules.map((vehicule, index) => (
                                <tr className="bg-gray-100" key={index}>
                                    <td className="border px-2 py-2">{vehicule.immatriculation}</td>
                                    <td className="border px-2 py-2">{vehicule.categorie}</td>
                                    <td className="border px-2 py-2">{vehicule.marque}</td>
                                    <td className="border px-2 py-2">{vehicule.carburant}</td>
                                    <td className="border px-2 py-2">{vehicule.nplace}</td>
                                    <td className="border px-2 py-2">{vehicule.ngrise}</td>
                                    <td className="border px-2 py-2">{vehicule.enpanne}</td>
                                    <td className="border px-2 py-2 flex justify-between">
                                        <Link to={`/Edit2/${vehicule.id}`}><Button className="mr-1">Modifier</Button></Link>
                                        <Button onClick={() => deleteVehicule(vehicule.id)}>Supprimer</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ListeVehicules;

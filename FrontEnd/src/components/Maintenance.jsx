import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';

function Maintenance() {
    const [maintenances, setMaintenances] = useState([]);

    useEffect(() => {
        fetchMaintenances();
    }, []);

    const fetchMaintenances = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/Maintenances');
            setMaintenances(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const deleteMaintenance = async (id) => {
        const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cette maintenance ?");
        if (isConfirmed) {
            try {
                await axios.delete(`http://localhost:8000/api/Maintenances/${parseInt(id)}`);
                fetchMaintenances();
            } catch (error) {
                console.error('Error deleting maintenance:', error);
            }
        }
    };

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
                    <div className="p-4 flex justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-center mb-4">Liste des maintenances</h1>
                            <Link to="/Formulaire6">
                                <Button className="mb-4">Ajouter</Button>
                            </Link>
                            <Button onClick={handlePrint} className="mb-4 ml-4">Imprimer</Button>
                        </div>
                    </div>
                    <table className="table-auto border-collapse border border-gray-400">
                        <thead>
                            <tr>
                                <th className="border px-2 py-2">Type de maintenance</th>
                                <th className="border px-2 py-2">Montant</th>
                                <th className="border px-2 py-2">Date</th>
                                <th className="border px-2 py-2">N° Garage</th>
                                <th className="border px-2 py-2">nom garage</th>
                                <th className="border px-2 py-2">adress garage</th>
                                <th className="border px-2 py-2">telephone garage</th>
                                <th className="border px-2 py-2">Imma-Auto</th>
                                <th className="border px-2 py-2">marque</th>
                                <th className="border px-2 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {maintenances.map((maintenance, index) => (
                                <tr className="bg-gray-100" key={index}>
                                    <td className="border px-2 py-2">{maintenance.typemaintenance}</td>
                                    <td className="border px-2 py-2">{maintenance.montant}</td>
                                    <td className="border px-2 py-2">{maintenance.date}</td>
                                    <td className="border px-2 py-2">{maintenance.NGarage}</td>
                                    <td className="border px-2 py-2">{maintenance?.garage?.Nomgarage}</td>
                                    <td className="border px-2 py-2">{maintenance?.garage?.Adresse}</td>
                                    <td className="border px-2 py-2">{maintenance?.garage?.telephone}</td>
                                    <td className="border px-2 py-2">{maintenance.immatriculation}</td>
                                    <td className="border px-2 py-2">{maintenance?.vehicule?.marque}</td>
                                    <td className="border px-2 py-2 flex justify-between">
                                        <Link to={`/Edit6/${maintenance.id}`}><Button className="mr-1">Modifier</Button></Link>
                                        <Button onClick={() => deleteMaintenance(maintenance.id)}>Supprimer</Button>
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

export default Maintenance;


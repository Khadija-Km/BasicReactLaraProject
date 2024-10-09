import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';
import axios from 'axios';


function AdminDashboard() {
    const [historiques, setHistoriques] = useState([]);

    useEffect(() => {
        fetchHistoriques();
    }, []);

    const fetchHistoriques = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/Historiques');
            setHistoriques(response.data);
        } catch (error) {
            console.error('Error fetching historiques:', error);
        }
    };

    const deleteHistorique = async (id) => {
        const isConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cette Mission ?");
        if (isConfirmed) {
            try {
                await axios.delete(`http://localhost:8000/api/Historiques/${parseInt(id)}`);
                fetchHistoriques();
            } catch (error) {
                console.error('Error deleting historique:', error);
            }
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="flex">
            <div className={'w-100 md:w-1/4'}>
                <Sidebar />
            </div>

            <div className={'w-100 md:w-3/4'}>
                <div className="p-4">
                    <h1 className="text-3xl font-bold mb-4">Liste des Missions</h1>
                    <Link to="/Formulaire1">
                        <Button className="mb-4">Ajouter</Button>
                    </Link>
                    <Button onClick={handlePrint} className="mb-4 ml-4">Imprimer</Button>
                    <table className="table-auto border-collapse border border-gray-400">
                        <thead>
                            <tr>
                                <th className="border px-1 py-1">Date</th>
                                <th className="border px-1 py-1">Mission</th>
                                <th className="border px-1 py-1">Division/Service</th>
                                <th className="border px-1 py-1">Immat-auto</th>
                                <th className="border px-1 py-1">chauffeur telephone  </th>
                                <th className="border px-1 py-1">chaufeur nom </th>
                                <th className="border px-1 py-1">chaufeur cin  </th>
                                <th className="border px-1 py-1">marque  </th>
                                <th className="border px-1 py-1">Destination</th>
                                <th className="border px-1 py-1">Ville</th>
                                <th className="border px-1 py-1">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historiques.map((histo, index) => (
                                <tr className="bg-gray-100" key={index}>
                                    <td className="border px-1 py-1">{histo.date}</td>
                                    <td className="border px-1 py-1">{histo.mission}</td>
                                    <td className="border px-1 py-1">{histo.service}</td>
                                    <td className="border px-1 py-1">{histo.immatriculation}</td>
                                    <td className="border px-1 py-1">{histo?.chauffeur?.telephone}</td>
                                    <td className="border px-1 py-1">{histo?.chauffeur?.nom}</td>
                                    <td className="border px-1 py-1">{histo?.chauffeur?.cin}</td>
                                    <td className="border px-1 py-1">{histo?.vehicule?.marque}</td>
                                    <td className="border px-1 py-1">{histo.destination}</td>
                                    <td className="border px-1 py-1">{histo?.ville?.NomVille}</td>
                                    <td className="border px-1 py-1 flex justify-between">
                                        <Link to={`/Edit1/${histo.id}`}><Button className="mr-1">Modifier</Button></Link>
                                        <Button onClick={() => deleteHistorique(histo.id)}>Supprimer</Button>
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

export default AdminDashboard;

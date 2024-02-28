import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from '../Layout/Sidebar';
import { Button } from './ui/button';
import axios from 'axios';

function AdminDashboard() {
    const [historiques, setHistoriques] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetchHistoriques();
    }, []);

    useEffect(() => {
        const results = historiques.filter(histo =>
            Object.values(histo).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        setSearchResults(results);
    }, [searchTerm, historiques]);

    const fetchHistoriques = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/Historiques');
            setHistoriques(response.data);
            setSearchResults(response.data);
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
                    <h1 className="text-3xl font-bold text-center mb-4">Liste des Missions</h1>
                    <Link to="/Formulaire1">
                        <Button className="mb-4">Ajouter</Button>
                    </Link>
                    <Button onClick={handlePrint} className="mb-4 ml-4">Imprimer</Button>
                    <input
                        type="text"
                        placeholder="Recherche"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mb-4 ml-4 px-2 py-1"
                    />
                    <table className="table-auto border-collapse border border-gray-400">
                        <thead>
                            <tr>
                                <th className="border px-2 py-2">Date</th>
                                <th className="border px-2 py-2">Mission</th>
                                <th className="border px-2 py-2">Division/Service</th>
                                <th className="border px-2 py-2">Automobile</th>
                                <th className="border px-2 py-2">Immat-auto</th>
                                <th className="border px-2 py-2">Chauffeur</th>
                                <th className="border px-2 py-2">Destination</th>
                                <th className="border px-2 py-2">Ville</th>
                                <th className="border px-2 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchResults.map((histo, index) => (
                                <tr className="bg-gray-100" key={index}>
                                    <td className="border px-2 py-2">{histo.date}</td>
                                    <td className="border px-2 py-2">{histo.mission}</td>
                                    <td className="border px-2 py-2">{histo.service}</td>
                                    <td className="border px-2 py-2">{histo.automobile}</td>
                                    <td className="border px-2 py-2">{histo.immatriculation}</td>
                                    <td className="border px-2 py-2">{histo.chauffeur}</td>
                                    <td className="border px-2 py-2">{histo.destination}</td>
                                    <td className="border px-2 py-2">{histo.ville}</td>
                                    <td className="border px-2 py-2 flex justify-between">
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

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { Services } from "../services";
import { useNavigate } from "react-router-dom";


export function InscriptionListView(props) {
    const abortController = new AbortController();

    const navigate = useNavigate();
    const useInscription = Hooks.useInscription();

    const [inscriptions, setInscriptions] = useState([]);
    
    const tableHead = ['id', 'utilisateur', 'pack', 'prix', 'mode_paiement', 'status_paiement', 'date'];
    const tableActions = ['edit', 'delete'];

    const findInscriptionIndex = data => {
        return inscriptions.findIndex(inscription => parseInt(inscription.id) === parseInt(data.id));
    }

    const handleEditClick = (event, data) => {
        event.preventDefault();

        navigate(`/inscriptions/${data.id}/modifier`)
    }

    const handleDeleteClick = (event, data) => {
        event.preventDefault();

        const inscriptionCopy = [...inscriptions];
        const index = findInscriptionIndex(data);

        inscriptionCopy.splice(index, 1);
        setInscriptions(inscriptionCopy);
        useInscription.deleteInscription(data.id, abortController.signal);
    }
    
    useEffect(() => {
        Services.InscriptionService.getAll(abortController.signal)
        .then(response => {
            let inscriptionCopy = [];

            response.inscriptions.forEach((inscription, index) => {
                let inscriptionCopyItem = {};
                inscriptionCopyItem['id'] = inscription.id;
                inscriptionCopyItem['utilisateur'] = `${inscription.utilisateur.nom} ${inscription.utilisateur.prenom}`;
                inscriptionCopyItem['pack'] = inscription.pack.qualification;
                inscriptionCopyItem['prix'] = inscription.prix;
                inscriptionCopyItem['mode_paiement'] = inscription.mode_paiement;
                inscriptionCopyItem['status_paiement'] = inscription.status_paiement;
                inscriptionCopyItem['date'] = new Date(inscription.created_at).toLocaleDateString();

                inscriptionCopy.push(inscriptionCopyItem)
            });
            setInscriptions([...inscriptionCopy]);
        })
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Liste des inscriptions</h2>
            <div className="card">
                <div className="col-12 mt-3 text-right">
                    <Link to="/inscriptions/creer" className="btn btn-info">Creer un inscription</Link>
                </div>
                <div className="card-body">
                    <Components.Table {...props} tableHead={tableHead} tableData={inscriptions} 
                        tableActions={tableActions} tableName="inscriptions"
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}/>
                </div>
            </div>
        </>
    )
} 
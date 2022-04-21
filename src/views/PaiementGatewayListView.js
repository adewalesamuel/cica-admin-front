import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { Services } from "../services";
import { useNavigate } from "react-router-dom";


export function PaiementGatewayListView(props) {
    const abortController = new AbortController();

    const navigate = useNavigate();
    const usePaiementGateway = Hooks.usePaiementGateway();

    const [paiement_gateways, setPaiementGateways] = useState([]);
    
    const tableHead = ['id', 'nom'];
    const tableActions = ['edit', 'delete'];

    const findPaiementGatewayIndex = data => {
        return paiement_gateways.findIndex(administrateur => parseInt(administrateur.id) === parseInt(data.id));
    }

    const handleEditClick = (event, data) => {
        event.preventDefault();

        navigate(`/paiement_gateways/${data.id}/modifier`)
    }

    const handleDeleteClick = (event, data) => {
        event.preventDefault();

        const administrateurCopy = [...paiement_gateways];
        const index = findPaiementGatewayIndex(data);

        administrateurCopy.splice(index, 1);
        setPaiementGateways(administrateurCopy);
        usePaiementGateway.deletePaiementGateway(data.id, abortController.signal);
    }
    
    useEffect(() => {
        Services.PaiementGatewayService.getAll(abortController.signal)
        .then(response => {
            setPaiementGateways(response.paiement_gateways);
        });
      return () => {
        // abortController.abort();
      }
    }, []);
    
    return (
        <>
            <h2>Liste des moyens de paiement</h2>
            <div className="card">
                <div className="col-12 mt-3 text-right">
                    <Link to="/paiement_gateways/creer" className="btn btn-info">Ajouter un moyen de paiement</Link>
                </div>
                <div className="card-body">
                    <Components.Table {...props} tableHead={tableHead} tableData={paiement_gateways} 
                        tableActions={tableActions} tableName="paiement_gateways"
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}/>
                </div>
            </div>
        </>
    )
} 
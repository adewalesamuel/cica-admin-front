import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { Services } from "../services";
import { useNavigate } from "react-router-dom";


export function AdministrateurListView(props) {
    const abortController = new AbortController();

    const navigate = useNavigate();
    const useAdministrateur = Hooks.useAdministrateur();

    const [administrateurs, setAdministrateurs] = useState([]);
    
    const tableHead = ['id', 'nom_prenom', 'email'];
    const tableActions = ['edit', 'delete'];

    const findAdministrateurIndex = data => {
        return administrateurs.findIndex(administrateur => parseInt(administrateur.id) === parseInt(data.id));
    }

    const handleEditClick = (event, data) => {
        event.preventDefault();

        navigate(`/administrateurs/${data.id}/modifier`)
    }

    const handleDeleteClick = (event, data) => {
        event.preventDefault();

        const administrateurCopy = [...administrateurs];
        const index = findAdministrateurIndex(data);

        administrateurCopy.splice(index, 1);
        setAdministrateurs(administrateurCopy);
        useAdministrateur.deleteAdministrateur(data.id, abortController.signal);
    }
    
    useEffect(() => {
        Services.AdministrateurService.getAll(abortController.signal)
        .then(response => {
            setAdministrateurs(response.administrateurs);
        })
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Liste des administrateurs</h2>
            <div className="card">
                <div className="col-12 mt-3 text-right">
                    <Link to="/administrateurs/creer" className="btn btn-info">Creer un administrateur</Link>
                </div>
                <div className="card-body">
                    <Components.Table {...props} tableHead={tableHead} tableData={administrateurs} 
                        tableActions={tableActions} tableName="administrateurs"
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}/>
                </div>
            </div>
        </>
    )
} 
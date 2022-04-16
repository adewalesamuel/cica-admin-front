import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { Services } from "../services";
import { useNavigate } from "react-router-dom";


export function TelechargementListView(props) {
    const abortController = new AbortController();

    const navigate = useNavigate();
    const useTelechargement = Hooks.useTelechargement();

    const [telechargements, setTelechargements] = useState([]);
    
    const tableHead = ['id', 'nom', 'description', 'url_fichier'];
    const tableActions = ['edit', 'delete'];

    const findTelechargementIndex = data => {
        return telechargements.findIndex(telechargement => parseInt(telechargement.id) === parseInt(data.id));
    }

    const handleEditClick = (event, data) => {
        event.preventDefault();

        navigate(`/telechargements/${data.id}/modifier`)
    }

    const handleDeleteClick = (event, data) => {
        event.preventDefault();

        const telechargementCopy = [...telechargements];
        const index = findTelechargementIndex(data);

        telechargementCopy.splice(index, 1);
        setTelechargements(telechargementCopy);
        useTelechargement.deleteTelechargement(data.id, abortController.signal);
    }
    
    useEffect(() => {
        Services.TelechargementService.getAll(abortController.signal)
        .then(response => {
            setTelechargements(response.telechargements);
        })
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Liste des telechargements</h2>
            <div className="card">
                <div className="col-12 mt-3 text-right">
                    <Link to="/telechargements/creer" className="btn btn-info">Creer un telechargement</Link>
                </div>
                <div className="card-body">
                    <Components.Table {...props} tableHead={tableHead} tableData={telechargements} 
                        tableActions={tableActions} tableName="telechargements"
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}/>
                </div>
            </div>
        </>
    )
} 
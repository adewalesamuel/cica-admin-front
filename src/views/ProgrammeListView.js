import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { Services } from "../services";
import { useNavigate } from "react-router-dom";


export function ProgrammeListView(props) {
    const abortController = new AbortController();

    const navigate = useNavigate();
    const useProgramme = Hooks.useProgramme();

    const [programmes, setProgrammes] = useState([]);
    
    const tableHead = ['id', 'titre', 'description', 'nbr_places', 'date', 'heure'];
    const tableActions = ['edit', 'delete'];

    const findProgrammeIndex = data => {
        return programmes.findIndex(programme => parseInt(programme.id) === parseInt(data.id));
    }

    const handleEditClick = (event, data) => {
        event.preventDefault();

        navigate(`/programmes/${data.id}/modifier`)
    }

    const handleDeleteClick = (event, data) => {
        event.preventDefault();

        const programmeCopy = [...programmes];
        const index = findProgrammeIndex(data);

        programmeCopy.splice(index, 1);
        setProgrammes(programmeCopy);
        useProgramme.deleteProgramme(data.id, abortController.signal);
    }
    
    useEffect(() => {
        Services.ProgrammeService.getAll(abortController.signal)
        .then(response => {
            setProgrammes(response.programmes);
        })
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Liste des programmes</h2>
            <div className="card">
                <div className="col-12 mt-3 text-right">
                    <Link to="/programmes/creer" className="btn btn-info">Creer un programme</Link>
                </div>
                <div className="card-body">
                    <Components.Table {...props} tableHead={tableHead} tableData={programmes} 
                        tableActions={tableActions} tableName="programmes"
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}/>
                </div>
            </div>
        </>
    )
} 
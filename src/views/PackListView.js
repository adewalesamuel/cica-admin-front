import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { Services } from "../services";
import { useNavigate } from "react-router-dom";


export function PackListView(props) {
    const abortController = new AbortController();

    const navigate = useNavigate();
    const usePack = Hooks.usePack();

    const [packs, setPacks] = useState([]);
    
    const tableHead = ['id', 'qualification', 'prix', 'regle_prix'];
    const tableActions = ['edit', 'delete'];

    const findPackIndex = data => {
        return packs.findIndex(pack => parseInt(pack.id) === parseInt(data.id));
    }

    const handleEditClick = (event, data) => {
        event.preventDefault();

        navigate(`/packs/${data.id}/modifier`)
    }

    const handleDeleteClick = (event, data) => {
        event.preventDefault();

        const packCopy = [...packs];
        const index = findPackIndex(data);

        packCopy.splice(index, 1);
        setPacks(packCopy);
        usePack.deletePack(data.id, abortController.signal);
    }
    
    useEffect(() => {
        Services.PackService.getAll(abortController.signal)
        .then(response => {
            setPacks(response.packs);
        })
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Liste des packs</h2>
            <div className="card">
                <div className="col-12 mt-3 text-right">
                    <Link to="/packs/creer" className="btn btn-info">Creer un pack</Link>
                </div>
                <div className="card-body">
                    <Components.Table {...props} tableHead={tableHead} tableData={packs} 
                        tableActions={tableActions} tableName="packs"
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}/>
                </div>
            </div>
        </>
    )
} 
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { Services } from "../services";
import { useNavigate } from "react-router-dom";


export function ResumeListView(props) {
    const abortController = new AbortController();

    const navigate = useNavigate();
    const useResume = Hooks.useResume();

    const [resumes, setResumes] = useState([]);
    
    const tableHead = ['id', 'titre', 'mots_cles', 'auteurs', 'status'];
    const tableActions = ['edit', 'delete'];

    const findResumeIndex = data => {
        return resumes.findIndex(resume => parseInt(resume.id) === parseInt(data.id));
    }

    const handleEditClick = (event, data) => {
        event.preventDefault();

        navigate(`/resumes/${data.id}/modifier`)
    }

    const handleDeleteClick = (event, data) => {
        event.preventDefault();

        const resumeCopy = [...resumes];
        const index = findResumeIndex(data);

        resumeCopy.splice(index, 1);
        setResumes(resumeCopy);
        useResume.deleteResume(data.id, abortController.signal);
    }
    
    useEffect(() => {
        Services.ResumeService.getAll(abortController.signal)
        .then(response => {
            setResumes(response.resumes);
        })
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Liste des resumes</h2>
            <div className="card">
                <div className="col-12 mt-3 text-right">
                    <Link to="/resumes/creer" className="btn btn-info">Creer un resume</Link>
                </div>
                <div className="card-body">
                    <Components.Table {...props} tableHead={tableHead} tableData={resumes} 
                        tableActions={tableActions} tableName="resumes"
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}/>
                </div>
            </div>
        </>
    )
} 
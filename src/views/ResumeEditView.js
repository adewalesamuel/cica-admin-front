import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate, useParams } from "react-router-dom";
import { Services } from "../services";


export function ResumeEditView(props) {
  const abortController = new AbortController();
  const useResume = Hooks.useResume();
  const navigate = useNavigate();
  const resumeId = useParams().id;

  const [utilisateurs, setUtilisateurs] = useState([]);
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      useResume.updateResume(resumeId, abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/resumes')
      });
    }

    useEffect(() => {
      setIsDisabled(true);

      useResume.getResume(resumeId, abortController.signal)
      .then(() => {
        setIsDisabled(false);

        Services.UtilisateurService.getAll(abortController.signal)
        .then(response => setUtilisateurs(response.utilisateurs));
      })
      .catch(err => {setIsDisabled(false); console.log(err);});
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Modifier le resume</h2>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <Components.ResumeForm useResume={useResume}
                        isDisabled={isDisabled} handleFormSubmit={handleFormSubmit}
                        utilisateurs={utilisateurs}/>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
} 
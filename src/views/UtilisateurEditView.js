import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate, useParams } from "react-router-dom";


export function UtilisateurEditView(props) {
  const abortController = new AbortController();
  const useUtilisateur = Hooks.useUtilisateur();
  const navigate = useNavigate();
  const utilisateurId = useParams().id;
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      useUtilisateur.updateUtilisateur(utilisateurId, abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/utilisateurs')
      })
      .catch(err => setIsDisabled(false));
    }

    useEffect(() => {
      setIsDisabled(true);

      useUtilisateur.getUtilisateur(utilisateurId, abortController.signal)
      .then(() => setIsDisabled(false))
      .catch(err => setIsDisabled(false));
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Modifier un utilisateur</h2>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <Components.UtilisateurForm useUtilisateur={useUtilisateur}
                        isDisabled={isDisabled} handleFormSubmit={handleFormSubmit}/>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
} 
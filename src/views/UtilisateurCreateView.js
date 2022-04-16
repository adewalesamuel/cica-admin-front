import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate } from "react-router-dom";


export function UtilisateurCreateView(props) {
  const abortController = new AbortController();
  const useUtilisateur = Hooks.useUtilisateur();
  const navigate = useNavigate();
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      useUtilisateur.createUtilisateur(abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/utilisateurs')
      })
      .catch(err => setIsDisabled(false));
    }
    
    useEffect(() => {    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Creer un utilisateur</h2>
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
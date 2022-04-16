import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate } from "react-router-dom";


export function AdministrateurCreateView(props) {
  const abortController = new AbortController();
  const useAdministrateur = Hooks.useAdministrateur();
  const navigate = useNavigate();
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      useAdministrateur.createAdministrateur(abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/administrateurs')
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
            <h2>Creer un administrateur</h2>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <Components.AdministrateurForm useAdministrateur={useAdministrateur}
                        isDisabled={isDisabled} handleFormSubmit={handleFormSubmit}/>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
} 
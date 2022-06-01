import { useEffect, useMemo, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate, useParams } from "react-router-dom";


export function AdministrateurEditView(props) {
  const abortController = useMemo(() => {
    return new AbortController();
  }, []);
  const useAdministrateur = Hooks.useAdministrateur();
  const navigate = useNavigate();
  const administrateurId = useParams().id;
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      useAdministrateur.updateAdministrateur(administrateurId, abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/administrateurs')
      });
    }

    useEffect(() => {
      setIsDisabled(true);

      useAdministrateur.getAdministrateur(administrateurId, abortController.signal)
      .then(() => setIsDisabled(false))
      .catch(err => {setIsDisabled(false)});
    
      return () => {
        // abortController.abort();
      }
    }, [abortController, administrateurId])
    
    return (
        <>
            <h2>Modifier un administrateur</h2>
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
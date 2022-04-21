import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate } from "react-router-dom";


export function TelechargementCreateView(props) {
  const abortController = new AbortController();
  const useTelechargement = Hooks.useTelechargement();
  const navigate = useNavigate();
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      useTelechargement.createTelechargement(abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/telechargements')
      })
      .catch(err => setIsDisabled(false));
    }

    useEffect(() => {
      console.log(useTelechargement.fichier);
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Creer un telechargement</h2>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <Components.TelechargementForm useTelechargement={useTelechargement}
                        isDisabled={isDisabled} handleFormSubmit={handleFormSubmit}/>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
} 
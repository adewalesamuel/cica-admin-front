import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate, useParams } from "react-router-dom";


export function TelechargementEditView(props) {
  const abortController = new AbortController();
  const useTelechargement = Hooks.useTelechargement();
  const navigate = useNavigate();
  const categorieId = useParams().id;
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      useTelechargement.updateTelechargement(categorieId, abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/telechargements')
      });
    }

    useEffect(() => {
      setIsDisabled(true);

      useTelechargement.getTelechargement(categorieId, abortController.signal)
      .then(() => setIsDisabled(false))
      .catch(err => {setIsDisabled(false); console.log("error");});
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Modifier un telechargement</h2>
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
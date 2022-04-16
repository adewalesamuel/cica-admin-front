import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate } from "react-router-dom";
import { Services } from "../services";


export function InscriptionCreateView(props) {
  const abortController = new AbortController();
  const useInscription = Hooks.useInscription();
  const navigate = useNavigate();
  
  const [isDisabled, setIsDisabled] = useState(false);

  const [utilisateurs, setUtilisateurs] = useState([]);
  const [packs, setPacks] = useState([]);
  const [programmes, setProgrammes] = useState([]);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      useInscription.createInscription(abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/inscriptions')
      })
      .catch(err => setIsDisabled(false));
    }

    useEffect(() => {
      Services.UtilisateurService.getAll(abortController.signal)
      .then(response => setUtilisateurs(response.utilisateurs));
      Services.PackService.getAll(abortController.signal)
      .then(response => setPacks(response.packs));
      Services.ProgrammeService.getAll(abortController.signal)
      .then(response => setProgrammes(response.programmes));
      
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Creer un inscription</h2>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <Components.InscriptionForm useInscription={useInscription}
                        isDisabled={isDisabled} handleFormSubmit={handleFormSubmit}
                        utilisateurs={utilisateurs} packs={packs} programmes={programmes}/>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
} 
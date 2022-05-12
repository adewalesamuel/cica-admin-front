import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate, useParams } from "react-router-dom";
import { Services } from "../services";


export function InscriptionEditView(props) {
  const abortController = new AbortController();
  const useInscription = Hooks.useInscription();
  const navigate = useNavigate();
  const inscriptionId = useParams().id;

  const [utilisateurs, setUtilisateurs] = useState([]);
  const [packs, setPacks] = useState([]);
  const [programmes, setProgrammes] = useState([]);
  const [moyens_paiement, setMoyens_paiement] = useState([])
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      useInscription.updateInscription(inscriptionId, abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/inscriptions')
      });
    }

    useEffect(() => {
      setIsDisabled(true);

      useInscription.getInscription(inscriptionId, abortController.signal)
      .then(() => {
        setIsDisabled(false);

        Services.UtilisateurService.getAll(abortController.signal)
        .then(response => setUtilisateurs(response.utilisateurs));
        Services.PackService.getAll(abortController.signal)
        .then(response => setPacks(response.packs));
        Services.ProgrammeService.getAll(abortController.signal)
        .then(response => setProgrammes(response.programmes));
        Services.PaiementGatewayService.getAll(abortController.signal)
        .then(response => setMoyens_paiement(response.paiement_gateways));
      })
      .catch(err => {setIsDisabled(false); console.log(err);});
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Modifier l'inscription</h2>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <Components.InscriptionForm useInscription={useInscription}
                        isDisabled={isDisabled} handleFormSubmit={handleFormSubmit}
                        utilisateurs={utilisateurs} packs={packs} programmes={programmes}
                        moyens_paiement={moyens_paiement}/>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
} 
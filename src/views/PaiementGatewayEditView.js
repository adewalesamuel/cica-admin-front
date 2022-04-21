import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate, useParams } from "react-router-dom";


export function PaiementGatewayEditView(props) {
  const abortController = new AbortController();
  const usePaiementGateway = Hooks.usePaiementGateway();
  const navigate = useNavigate();
  const administrateurId = useParams().id;
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      usePaiementGateway.updatePaiementGateway(administrateurId, abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/paiement_gateways')
      });
    }

    useEffect(() => {
      setIsDisabled(true);

      usePaiementGateway.getPaiementGateway(administrateurId, abortController.signal)
      .then(() => setIsDisabled(false))
      .catch(err => {setIsDisabled(false); console.log(err);});
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Modifier le moyen de paiement</h2>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <Components.PaiementGatewayForm usePaiementGateway={usePaiementGateway}
                        isDisabled={isDisabled} handleFormSubmit={handleFormSubmit}/>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
} 
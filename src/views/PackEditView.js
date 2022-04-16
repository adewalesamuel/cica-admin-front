import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate, useParams } from "react-router-dom";


export function PackEditView(props) {
  const abortController = new AbortController();
  const usePack = Hooks.usePack();
  const navigate = useNavigate();
  const categorieId = useParams().id;
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      usePack.updatePack(categorieId, abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/packs')
      });
    }

    useEffect(() => {
      setIsDisabled(true);

      usePack.getPack(categorieId, abortController.signal)
      .then(() => setIsDisabled(false))
      .catch(err => {setIsDisabled(false); console.log("error");});
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Modifier un pack</h2>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <Components.PackForm usePack={usePack}
                        isDisabled={isDisabled} handleFormSubmit={handleFormSubmit}/>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
} 
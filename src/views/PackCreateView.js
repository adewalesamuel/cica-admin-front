import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate } from "react-router-dom";


export function PackCreateView(props) {
  const abortController = new AbortController();
  const usePack = Hooks.usePack();
  const navigate = useNavigate();
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      usePack.createPack(abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/packs')
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
            <h2>Creer un pack</h2>
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
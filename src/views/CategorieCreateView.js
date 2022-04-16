import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate } from "react-router-dom";


export function CategorieCreateView(props) {
  const abortController = new AbortController();
  const useCategorie = Hooks.useCategorie();
  const navigate = useNavigate();
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      useCategorie.createCategorie(abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/categories')
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
            <h2>Creer un categorie</h2>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <Components.CategorieForm useCategorie={useCategorie}
                        isDisabled={isDisabled} handleFormSubmit={handleFormSubmit}/>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
} 
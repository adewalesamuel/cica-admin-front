import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate, useParams } from "react-router-dom";


export function CategorieEditView(props) {
  const abortController = new AbortController();
  const useCategorie = Hooks.useCategorie();
  const navigate = useNavigate();
  const categorieId = useParams().id;
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      useCategorie.updateCategorie(categorieId, abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/categories')
      });
    }

    useEffect(() => {
      setIsDisabled(true);

      useCategorie.getCategorie(categorieId, abortController.signal)
      .then(() => setIsDisabled(false))
      .catch(err => {setIsDisabled(false); console.log("error");});
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Modifier un categorie</h2>
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
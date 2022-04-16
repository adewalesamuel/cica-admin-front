import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate } from "react-router-dom";
import { Services } from "../services";


export function ProgrammeCreateView(props) {
  const abortController = new AbortController();
  const useProgramme = Hooks.useProgramme();
  const navigate = useNavigate();
  
  const [isDisabled, setIsDisabled] = useState(false);

  const [categories, setCategories] = useState([]);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      useProgramme.createProgramme(abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/programmes')
      })
      .catch(err => setIsDisabled(false));
    }

    useEffect(() => {
      Services.CategorieService.getAll(abortController.signal)
      .then(response => setCategories(response.categories));
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Creer un programme</h2>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <Components.ProgrammeForm useProgramme={useProgramme}
                        isDisabled={isDisabled} handleFormSubmit={handleFormSubmit}
                        categories={categories}/>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
} 
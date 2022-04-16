import { useEffect, useState, } from "react";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useNavigate, useParams } from "react-router-dom";
import { Services } from "../services";


export function ProgrammeEditView(props) {
  const abortController = new AbortController();
  const useProgramme = Hooks.useProgramme();
  const navigate = useNavigate();
  const programmeId = useParams().id;

  const [categories, setCategories] = useState([]);
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleFormSubmit = event => {
    event.preventDefault();
    
      setIsDisabled(true);
      useProgramme.updateProgramme(programmeId, abortController.signal)
      .then(() => {
        setIsDisabled(false);
        navigate('/programmes')
      });
    }

    useEffect(() => {
      setIsDisabled(true);

      useProgramme.getProgramme(programmeId, abortController.signal)
      .then(() => {
        setIsDisabled(false);

        return Services.CategorieService.getAll(abortController.signal)
        .then(response => setCategories(response.categories));
      })
      .catch(err => {setIsDisabled(false); console.log(err);});
    
      return () => {
        // abortController.abort();
      }
    }, [])
    
    return (
        <>
            <h2>Modifier le programme</h2>
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
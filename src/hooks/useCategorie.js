import { useState } from 'react';
import { Services } from '../services';

export const useCategorie = () => {
    const [id, setId] = useState('');
	const [nom, setNom] = useState('');
	const [couleur, setCouleur] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getCategorie = (categorieId, abortController) => {        
        return Services.CategorieService.getById(categorieId, abortController.signal)
        .then(categorie => {
            fillCategorie(categorie);
            setIsDisabled(false);
        });
    }

    const createCategorie = abortController => {
        const payload = {
            nom,
		couleur,
		
        };

        return Services.CategorieService.create(JSON.stringify(payload), abortController.signal);
    }
    const updateCategorie = (categorieId, abortController) => {
        const payload = {
            nom,
		couleur,
		
        };

        return Services.CategorieService.update(categorieId, JSON.stringify(payload), abortController.signal);
    }
    const deleteCategorie = (categorieId, abortController) => {
        return Services.CategorieService.destroy(categorieId, abortController.signal);
    }
    const fillCategorie = (categorie) => {
        setId(categorie.id);
        setNom(categorie.nom ?? '');
		setCouleur(categorie.couleur ?? '');
		
    }
    const emptyCategorie = () => {
        setId('');
        setNom('');
		setCouleur('');
		
    }

    return {
        id,
        nom,
		couleur,
		
        errors,
        isDisabled,
        setNom,
		setCouleur,
		
        setId,
        setErrors,
        setIsDisabled,
        getCategorie,
        createCategorie,
        updateCategorie,
        deleteCategorie,
        fillCategorie,
        emptyCategorie
    };
}
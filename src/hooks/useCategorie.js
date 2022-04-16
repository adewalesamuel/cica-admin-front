import { useState } from 'react';
import { Services } from '../services';

export const useCategorie = () => {
    const [id, setId] = useState('');
	const [nom, setNom] = useState('');
	const [couleur, setCouleur] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getCategorie = (categorieId, signal) => {        
        return Services.CategorieService.getById(categorieId, signal)
        .then(response => {
            fillCategorie(response.categorie);
            setIsDisabled(false);
        });
    }

    const createCategorie = signal => {
        const payload = {
            nom,
		couleur,
		
        };

        return Services.CategorieService.create(JSON.stringify(payload), signal);
    }
    const updateCategorie = (categorieId, signal) => {
        const payload = {
            nom,
		couleur,
		
        };

        return Services.CategorieService.update(categorieId, JSON.stringify(payload), signal);
    }
    const deleteCategorie = (categorieId, signal) => {
        return Services.CategorieService.destroy(categorieId, signal);
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
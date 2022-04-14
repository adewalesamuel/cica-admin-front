import { useState } from 'react';
import { Services } from '../services';

export const useAdministrateur = () => {
    const [id, setId] = useState('');
	const [nom_prenom, setNom_prenom] = useState('');
	const [email, setEmail] = useState('');
	const [mot_de_passe, setMot_de_passe] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getAdministrateur = (administrateurId, abortController) => {        
        return Services.AdministrateurService.getById(administrateurId, abortController.signal)
        .then(administrateur => {
            fillAdministrateur(administrateur);
            setIsDisabled(false);
        });
    }

    const createAdministrateur = abortController => {
        const payload = {
            nom_prenom,
		email,
		mot_de_passe,
		
        };

        return Services.AdministrateurService.create(JSON.stringify(payload), abortController.signal);
    }
    const updateAdministrateur = (administrateurId, abortController) => {
        const payload = {
            nom_prenom,
		email,
		mot_de_passe,
		
        };

        return Services.AdministrateurService.update(administrateurId, JSON.stringify(payload), abortController.signal);
    }
    const deleteAdministrateur = (administrateurId, abortController) => {
        return Services.AdministrateurService.destroy(administrateurId, abortController.signal);
    }
    const fillAdministrateur = (administrateur) => {
        setId(administrateur.id);
        setNom_prenom(administrateur.nom_prenom ?? '');
		setEmail(administrateur.email ?? '');
		setMot_de_passe(administrateur.mot_de_passe ?? '');
		
    }
    const emptyAdministrateur = () => {
        setId('');
        setNom_prenom('');
		setEmail('');
		setMot_de_passe('');
		
    }

    return {
        id,
        nom_prenom,
		email,
		mot_de_passe,
		
        errors,
        isDisabled,
        setNom_prenom,
		setEmail,
		setMot_de_passe,
		
        setId,
        setErrors,
        setIsDisabled,
        getAdministrateur,
        createAdministrateur,
        updateAdministrateur,
        deleteAdministrateur,
        fillAdministrateur,
        emptyAdministrateur
    };
}
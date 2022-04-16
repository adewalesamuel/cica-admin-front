import { useState } from 'react';
import { Services } from '../services';

export const useAdministrateur = () => {
    const [id, setId] = useState('');
	const [nom_prenom, setNom_prenom] = useState('');
	const [email, setEmail] = useState('');
	const [mot_de_passe, setMot_de_passe] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getAdministrateur = (administrateurId, signal) => {        
        return Services.AdministrateurService.getById(administrateurId, signal)
        .then(response => {
            fillAdministrateur(response.administrateur);
            setIsDisabled(false);
        });
    }

    const createAdministrateur = signal => {
        const payload = {
            nom_prenom,
		email,
		mot_de_passe,
		
        };

        return Services.AdministrateurService.create(JSON.stringify(payload), signal);
    }
    const updateAdministrateur = (administrateurId, signal) => {
        const payload = {
            nom_prenom,
		email,
		mot_de_passe,
		
        };

        return Services.AdministrateurService.update(administrateurId, JSON.stringify(payload), signal);
    }
    const deleteAdministrateur = (administrateurId, signal) => {
        return Services.AdministrateurService.destroy(administrateurId, signal);
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
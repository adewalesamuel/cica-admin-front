import { useState } from 'react';
import { Services } from '../services';

export const useTelechargement = () => {
    const [id, setId] = useState('');
	const [nom, setNom] = useState('');
	const [description, setDescription] = useState('');
	const [url_fichier, setUrl_fichier] = useState('');
	const [fichier, setFichier] = useState(null);
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getTelechargement = (telechargementId, signal) => {        
        return Services.TelechargementService.getById(telechargementId, signal)
        .then(response => {
            fillTelechargement(response.telechargement);
            setIsDisabled(false);
        });
    }

    const createTelechargement = signal => {
        const formData = new FormData();

        formData.append("nom", nom);
        formData.append("description", description);
        formData.append("fichier", fichier);

        return Services.TelechargementService.create(formData, signal);
    }
    const updateTelechargement = (telechargementId, signal) => {
        const formData = new FormData();

        formData.append("nom", nom);
        formData.append("description", description);
        formData.append("fichier", fichier);

        return Services.TelechargementService.update(telechargementId, formData, signal);
    }
    const deleteTelechargement = (telechargementId, signal) => {
        return Services.TelechargementService.destroy(telechargementId, signal);
    }
    const fillTelechargement = (telechargement) => {
        setId(telechargement.id);
        setNom(telechargement.nom ?? '');
		setDescription(telechargement.description ?? '');
		
    }
    const emptyTelechargement = () => {
        setId('');
        setNom('');
		setDescription('');
		setFichier(null);
		
    }

    return {
        id,
        nom,
		description,
		url_fichier,
        fichier,
		
        errors,
        isDisabled,
        setNom,
		setDescription,
		setUrl_fichier,
		setFichier,
		
        setId,
        setErrors,
        setIsDisabled,
        getTelechargement,
        createTelechargement,
        updateTelechargement,
        deleteTelechargement,
        fillTelechargement,
        emptyTelechargement
    };
}
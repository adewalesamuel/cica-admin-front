import { useState } from 'react';
import { Services } from '../services';

export const useTelechargement = () => {
    const [id, setId] = useState('');
	const [nom, setNom] = useState('');
	const [description, setDescription] = useState('');
	const [url_fichier, setUrl_fichier] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getTelechargement = (telechargementId, abortController) => {        
        return Services.TelechargementService.getById(telechargementId, abortController.signal)
        .then(telechargement => {
            fillTelechargement(telechargement);
            setIsDisabled(false);
        });
    }

    const createTelechargement = abortController => {
        const payload = {
            nom,
		description,
		url_fichier,
		
        };

        return Services.TelechargementService.create(JSON.stringify(payload), abortController.signal);
    }
    const updateTelechargement = (telechargementId, abortController) => {
        const payload = {
            nom,
		description,
		url_fichier,
		
        };

        return Services.TelechargementService.update(telechargementId, JSON.stringify(payload), abortController.signal);
    }
    const deleteTelechargement = (telechargementId, abortController) => {
        return Services.TelechargementService.destroy(telechargementId, abortController.signal);
    }
    const fillTelechargement = (telechargement) => {
        setId(telechargement.id);
        setNom(telechargement.nom ?? '');
		setDescription(telechargement.description ?? '');
		setUrl_fichier(telechargement.url_fichier ?? '');
		
    }
    const emptyTelechargement = () => {
        setId('');
        setNom('');
		setDescription('');
		setUrl_fichier('');
		
    }

    return {
        id,
        nom,
		description,
		url_fichier,
		
        errors,
        isDisabled,
        setNom,
		setDescription,
		setUrl_fichier,
		
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
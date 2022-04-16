import { useState } from 'react';
import { Services } from '../services';

export const useTelechargement = () => {
    const [id, setId] = useState('');
	const [nom, setNom] = useState('');
	const [description, setDescription] = useState('');
	const [url_fichier, setUrl_fichier] = useState('');
	const [fichier, setFichier] = useState('');
	

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
        const payload = {
            nom,
		description,
		url_fichier,
		
        };

        return Services.TelechargementService.create(JSON.stringify(payload), signal);
    }
    const updateTelechargement = (telechargementId, signal) => {
        const payload = {
            nom,
		description,
		url_fichier,
		
        };

        return Services.TelechargementService.update(telechargementId, JSON.stringify(payload), signal);
    }
    const deleteTelechargement = (telechargementId, signal) => {
        return Services.TelechargementService.destroy(telechargementId, signal);
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
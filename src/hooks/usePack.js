import { useState } from 'react';
import { Services } from '../services';

export const usePack = () => {
    const [id, setId] = useState('');
	const [qualification, setQualification] = useState('');
	const [prix, setPrix] = useState('');
	const [regle_prix, setRegle_prix] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getPack = (packId, signal) => {        
        return Services.PackService.getById(packId, signal)
        .then(response => {
            fillPack(response.pack);
            setIsDisabled(false);
        });
    }

    const createPack = signal => {
        const payload = {
            qualification,
		prix,
		regle_prix: JSON.stringify(regle_prix),
		
        };

        return Services.PackService.create(JSON.stringify(payload), signal);
    }
    const updatePack = (packId, signal) => {
        const payload = {
            qualification,
		prix,
		regle_prix: JSON.stringify(regle_prix),
		
        };

        return Services.PackService.update(packId, JSON.stringify(payload), signal);
    }
    const deletePack = (packId, signal) => {
        return Services.PackService.destroy(packId, signal);
    }
    const fillPack = (pack) => {
        setId(pack.id);
        setQualification(pack.qualification ?? '');
		setPrix(pack.prix ?? '');
        setRegle_prix(pack.regle_prix ? JSON.parse(pack.regle_prix): '');
		
    }
    const emptyPack = () => {
        setId('');
        setQualification('');
		setPrix('');
		setRegle_prix('');
		
    }

    return {
        id,
        qualification,
		prix,
		regle_prix,
		
        errors,
        isDisabled,
        setQualification,
		setPrix,
		setRegle_prix,
		
        setId,
        setErrors,
        setIsDisabled,
        getPack,
        createPack,
        updatePack,
        deletePack,
        fillPack,
        emptyPack
    };
}
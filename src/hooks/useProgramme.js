import { useState } from 'react';
import { Services } from '../services';

export const useProgramme = () => {
    const [id, setId] = useState('');
	const [titre, setTitre] = useState('');
	const [description, setDescription] = useState('');
	const [date, setDate] = useState('');
	const [heure, setHeure] = useState('');
	const [categorie_id, setCategorie_id] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getProgramme = (programmeId, abortController) => {        
        return Services.ProgrammeService.getById(programmeId, abortController.signal)
        .then(programme => {
            fillProgramme(programme);
            setIsDisabled(false);
        });
    }

    const createProgramme = abortController => {
        const payload = {
            titre,
		description,
		date,
		heure,
		categorie_id,
		
        };

        return Services.ProgrammeService.create(JSON.stringify(payload), abortController.signal);
    }
    const updateProgramme = (programmeId, abortController) => {
        const payload = {
            titre,
		description,
		date,
		heure,
		categorie_id,
		
        };

        return Services.ProgrammeService.update(programmeId, JSON.stringify(payload), abortController.signal);
    }
    const deleteProgramme = (programmeId, abortController) => {
        return Services.ProgrammeService.destroy(programmeId, abortController.signal);
    }
    const fillProgramme = (programme) => {
        setId(programme.id);
        setTitre(programme.titre ?? '');
		setDescription(programme.description ?? '');
		setDate(programme.date ?? '');
		setHeure(programme.heure ?? '');
		setCategorie_id(programme.categorie_id ?? '');
		
    }
    const emptyProgramme = () => {
        setId('');
        setTitre('');
		setDescription('');
		setDate('');
		setHeure('');
		setCategorie_id('');
		
    }

    return {
        id,
        titre,
		description,
		date,
		heure,
		categorie_id,
		
        errors,
        isDisabled,
        setTitre,
		setDescription,
		setDate,
		setHeure,
		setCategorie_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getProgramme,
        createProgramme,
        updateProgramme,
        deleteProgramme,
        fillProgramme,
        emptyProgramme
    };
}
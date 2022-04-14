import { useState } from 'react';
import { Services } from '../services';

export const useResume = () => {
    const [id, setId] = useState('');
	const [titre, setTitre] = useState('');
	const [mot_cles, setMot_cles] = useState('');
	const [auteurs, setAuteurs] = useState('');
	const [contenu, setContenu] = useState('');
	const [status, setStatus] = useState('');
	const [utilsateur_id, setUtilsateur_id] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getResume = (resumeId, abortController) => {        
        return Services.ResumeService.getById(resumeId, abortController.signal)
        .then(resume => {
            fillResume(resume);
            setIsDisabled(false);
        });
    }

    const createResume = abortController => {
        const payload = {
            titre,
		mot_cles,
		auteurs,
		contenu,
		status,
		utilsateur_id,
		
        };

        return Services.ResumeService.create(JSON.stringify(payload), abortController.signal);
    }
    const updateResume = (resumeId, abortController) => {
        const payload = {
            titre,
		mot_cles,
		auteurs,
		contenu,
		status,
		utilsateur_id,
		
        };

        return Services.ResumeService.update(resumeId, JSON.stringify(payload), abortController.signal);
    }
    const deleteResume = (resumeId, abortController) => {
        return Services.ResumeService.destroy(resumeId, abortController.signal);
    }
    const fillResume = (resume) => {
        setId(resume.id);
        setTitre(resume.titre ?? '');
		setMot_cles(resume.mot_cles ?? '');
		setAuteurs(resume.auteurs ?? '');
		setContenu(resume.contenu ?? '');
		setStatus(resume.status ?? '');
		setUtilsateur_id(resume.utilsateur_id ?? '');
		
    }
    const emptyResume = () => {
        setId('');
        setTitre('');
		setMot_cles('');
		setAuteurs('');
		setContenu('');
		setStatus('');
		setUtilsateur_id('');
		
    }

    return {
        id,
        titre,
		mot_cles,
		auteurs,
		contenu,
		status,
		utilsateur_id,
		
        errors,
        isDisabled,
        setTitre,
		setMot_cles,
		setAuteurs,
		setContenu,
		setStatus,
		setUtilsateur_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getResume,
        createResume,
        updateResume,
        deleteResume,
        fillResume,
        emptyResume
    };
}
import { useState } from 'react';
import { Services } from '../services';

export const useResume = () => {
    const statuses = ['brouillon', 'soumis', 'relecture', 'termine'];

    const [id, setId] = useState('');
	const [titre, setTitre] = useState('');
	const [mots_cles, setMots_cles] = useState('');
	const [auteurs, setAuteurs] = useState('');
	const [contenu, setContenu] = useState('');
	const [status, setStatus] = useState(statuses[0]);
	const [utilisateur_id, setUtilisateur_id] = useState('');

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getResume = (resumeId, signal) => {        
        return Services.ResumeService.getById(resumeId, signal)
        .then(response => {
            fillResume(response.resume);
        });
    }

    const createResume = signal => {
        const payload = {
            titre,
		mots_cles,
		auteurs: JSON.stringify(auteurs),
		contenu,
		status,
		utilisateur_id,
		
        };

        return Services.ResumeService.create(JSON.stringify(payload), signal);
    }
    const updateResume = (resumeId, signal) => {
        const payload = {
            titre,
		mots_cles,
		auteurs: JSON.stringify(auteurs),
		contenu,
		status,
		utilisateur_id,
		
        };

        return Services.ResumeService.update(resumeId, JSON.stringify(payload), signal);
    }
    const deleteResume = (resumeId, signal) => {
        return Services.ResumeService.destroy(resumeId, signal);
    }
    const fillResume = (resume) => {
        setId(resume.id);
        setTitre(resume.titre ?? '');
		setMots_cles(resume.mots_cles ?? '');
		setAuteurs(resume.auteurs ? JSON.parse(resume.auteurs): '');
		setContenu(resume.contenu ?? '');
		setStatus(resume.status ?? '');
		setUtilisateur_id(resume.utilisateur_id ?? '');
		
    }
    const emptyResume = () => {
        setId('');
        setTitre('');
		setMots_cles('');
		setAuteurs('');
		setContenu('');
		setStatus('');
		setUtilisateur_id('');
		
    }

    return {
        id,
        titre,
		mots_cles,
		auteurs,
		contenu,
		status,
        statuses,
		utilisateur_id,
		
        errors,
        isDisabled,
        setTitre,
		setMots_cles,
		setAuteurs,
		setContenu,
		setStatus,
		setUtilisateur_id,
		
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
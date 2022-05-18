import { useState } from 'react';
import { Services } from '../services';

export const useResume = () => {
    const statuses = ['brouillon', 'soumis', 'relecture', 'termine'];

    const [id, setId] = useState('');
	const [titre, setTitre] = useState('');
	const [mots_cles, setMots_cles] = useState('');
	const [auteurs, setAuteurs] = useState('');
	const [fichier_url, setFichier_url] = useState('');
    const [fichier, setFichier] = useState(null);
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
        const formData = new FormData();

        formData.append('titre', titre);
        formData.append('mots_cles', mots_cles);
        formData.append('auteurs', JSON.stringify(auteurs));
        formData.append('fichier', fichier);
        formData.append('status', status);
        formData.append('utilisateur_id', utilisateur_id);

        return Services.ResumeService.create(formData, signal);
    }
    const updateResume = (resumeId, signal) => {
        const formData = new FormData();

        formData.append('titre', titre);
        formData.append('mots_cles', mots_cles);
        formData.append('auteurs', JSON.stringify(auteurs));
        formData.append('fichier', fichier);
        formData.append('status', status);
        formData.append('utilisateur_id', utilisateur_id);

        return Services.ResumeService.update(resumeId, formData, signal);
    }
    const deleteResume = (resumeId, signal) => {
        return Services.ResumeService.destroy(resumeId, signal);
    }
    const fillResume = (resume) => {
        setId(resume.id);
        setTitre(resume.titre ?? '');
		setMots_cles(resume.mots_cles ?? '');
		setAuteurs(resume.auteurs ? JSON.parse(resume.auteurs): '');
		setFichier_url(resume.fichier_url ?? '');
		setStatus(resume.status ?? '');
		setUtilisateur_id(resume.utilisateur_id ?? '');
		
    }
    const emptyResume = () => {
        setId('');
        setTitre('');
		setMots_cles('');
		setAuteurs('');
		setFichier(null);
        setFichier_url('');
		setStatus('');
		setUtilisateur_id('');
		
    }

    return {
        id,
        titre,
		mots_cles,
		auteurs,
		fichier_url,
		fichier,
		status,
        statuses,
		utilisateur_id,
		
        errors,
        isDisabled,
        setTitre,
		setMots_cles,
		setAuteurs,
		setFichier_url,
		setFichier,
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
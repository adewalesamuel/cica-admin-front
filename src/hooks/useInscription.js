import { useState } from 'react';
import { Services } from '../services';

export const useInscription = () => {
    const statuses = ['paye', 'en-attente', 'annule'];

    const [id, setId] = useState('');
	const [pack_id, setPack_id] = useState('');
	const [programme_id, setProgramme_id] = useState('');
	const [utilisateur_id, setUtilisateur_id] = useState('');
	const [prix, setPrix] = useState('');
	const [mode_paiement, setMode_paiement] = useState('');
	const [status_paiement, setStatus_paiement] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getInscription = (inscriptionId, signal) => {        
        return Services.InscriptionService.getById(inscriptionId, signal)
        .then(response => {
            fillInscription(response.inscription);
            setIsDisabled(false);
        });
    }

    const createInscription = signal => {
        const payload = {
            pack_id,
		programme_id,
		utilisateur_id,
		prix,
		mode_paiement,
		status_paiement,
		
        };

        return Services.InscriptionService.create(JSON.stringify(payload), signal);
    }
    const updateInscription = (inscriptionId, signal) => {
        const payload = {
            pack_id,
		programme_id,
		utilisateur_id,
		prix,
		mode_paiement,
		status_paiement,
		
        };

        return Services.InscriptionService.update(inscriptionId, JSON.stringify(payload), signal);
    }
    const deleteInscription = (inscriptionId, signal) => {
        return Services.InscriptionService.destroy(inscriptionId, signal);
    }
    const fillInscription = (inscription) => {
        setId(inscription.id);
        setPack_id(inscription.pack_id ?? '');
		setProgramme_id(inscription.programme_id ?? '');
		setUtilisateur_id(inscription.utilisateur_id ?? '');
		setPrix(inscription.prix ?? '');
		setMode_paiement(inscription.mode_paiement ?? '');
		setStatus_paiement(inscription.status_paiement ?? '');
		
    }
    const emptyInscription = () => {
        setId('');
        setPack_id('');
		setProgramme_id('');
		setUtilisateur_id('');
		setPrix('');
		setMode_paiement('');
		setStatus_paiement('');
		
    }

    return {
        id,
        pack_id,
		programme_id,
		utilisateur_id,
		prix,
		mode_paiement,
		status_paiement,
        statuses,
		
        errors,
        isDisabled,
        setPack_id,
		setProgramme_id,
		setUtilisateur_id,
		setPrix,
		setMode_paiement,
		setStatus_paiement,
		
        setId,
        setErrors,
        setIsDisabled,
        getInscription,
        createInscription,
        updateInscription,
        deleteInscription,
        fillInscription,
        emptyInscription
    };
}
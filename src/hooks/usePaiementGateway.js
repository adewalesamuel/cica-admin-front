import { useState } from 'react';
import { Services } from '../services';

export const usePaiementGateway = () => {
    const [id, setId] = useState('');
	const [nom, setNom] = useState('');
	const [infos_connexion, setInfos_connexion] = useState('');
	

    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getPaiementGateway = (paiementgatewayId, signal) => {        
        return Services.PaiementGatewayService.getById(paiementgatewayId, signal)
        .then(response => {
            fillPaiementGateway(response.paiementgateway);
            setIsDisabled(false);
        });
    }

    const createPaiementGateway = signal => {
        const payload = {
            nom,
		infos_connexion,
		
        };

        return Services.PaiementGatewayService.create(JSON.stringify(payload), signal);
    }
    const updatePaiementGateway = (paiementgatewayId, signal) => {
        const payload = {
            nom,
		infos_connexion,
		
        };

        return Services.PaiementGatewayService.update(paiementgatewayId, JSON.stringify(payload), signal);
    }
    const deletePaiementGateway = (paiementgatewayId, signal) => {
        return Services.PaiementGatewayService.destroy(paiementgatewayId, signal);
    }
    const fillPaiementGateway = (paiementgateway) => {
        setId(paiementgateway.id);
        setNom(paiementgateway.nom ?? '');
		setInfos_connexion(paiementgateway.infos_connexion ?? '');
		
    }
    const emptyPaiementGateway = () => {
        setId('');
        setNom('');
		setInfos_connexion('');
		
    }

    return {
        id,
        nom,
		infos_connexion,
		
        errors,
        isDisabled,
        setNom,
		setInfos_connexion,
		
        setId,
        setErrors,
        setIsDisabled,
        getPaiementGateway,
        createPaiementGateway,
        updatePaiementGateway,
        deletePaiementGateway,
        fillPaiementGateway,
        emptyPaiementGateway
    };
}
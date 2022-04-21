import { useState } from 'react';
import { Services } from '../services';

export const usePaiementGateway = () => {
    const [id, setId] = useState('');
	const [nom, setNom] = useState('');
	const [infos_connexion, setInfos_connexion] = useState(''); //{"identifiant", "password"}
    const [identifiant, setIdentifiant] = useState("");
    const [password, setPassword] = useState("");
	
    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getPaiementGateway = (paiementgatewayId, signal) => {        
        return Services.PaiementGatewayService.getById(paiementgatewayId, signal)
        .then(response => {
            fillPaiementGateway(response.paiement_gateway);
            setIsDisabled(false);
        });
    }

    const createPaiementGateway = signal => {
        const payload = {
            nom,
		    infos_connexion: JSON.stringify({identifiant, password}),
        };

        return Services.PaiementGatewayService.create(JSON.stringify(payload), signal);
    }
    const updatePaiementGateway = (paiementgatewayId, signal) => {
        const payload = {
            nom,
		    infos_connexion: JSON.stringify({identifiant, password}),
		
        };

        return Services.PaiementGatewayService.update(paiementgatewayId, JSON.stringify(payload), signal);
    }
    const deletePaiementGateway = (paiementgatewayId, signal) => {
        return Services.PaiementGatewayService.destroy(paiementgatewayId, signal);
    }
    const fillPaiementGateway = (paiementgateway) => {
        setId(paiementgateway.id);
        setNom(paiementgateway.nom ?? '');

        const infos_connexion = JSON.parse(paiementgateway.infos_connexion);

        if (infos_connexion) {
            setIdentifiant(infos_connexion.identifiant);
            setPassword(infos_connexion.password);
        }
        
		setInfos_connexion(paiementgateway.infos_connexion ?? '');
		
    }
    const emptyPaiementGateway = () => {
        setId('');
        setNom('');
        setIdentifiant('');
        setPassword('');
		setInfos_connexion('');
		
    }

    return {
        id,
        nom,
        identifiant,
        password,
		infos_connexion,
		
        errors,
        isDisabled,
        setNom,
        setIdentifiant,
        setPassword,
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
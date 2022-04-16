import { Components } from '..'

export function InscriptionForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='pack_id'>Pack</label>
                        <select className='select2 form-control' id='pack_id' name='pack_id' value={props.useInscription.pack_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useInscription.setPack_id(e.target.value) ?? null} required>
                            <option hidden>Choisissez un pack</option>
                            {
                                props.packs.map(pack => {
                                    return <option key={Math.random()} value={pack.id ?? ''}>{pack.qualification}</option>
                                })
                            } 
                        </select>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='programme_id'>Programme</label>
                        <select className='select2 form-control' id='programme_id' name='programme_id' value={props.useInscription.programme_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useInscription.setProgramme_id(e.target.value) ?? null} required>
                            <option hidden>Choisissez un programme</option>
                            {
                                props.programmes.map(programme => {
                                    return <option key={Math.random()} value={programme.id ?? ''}>{programme.titre}</option>
                                })
                            } 
                        </select>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='utilisateur_id'>Utilisateur</label>
                        <select className='select2 form-control' id='utilisateur_id' name='utilisateur_id' value={props.useInscription.utilisateur_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useInscription.setUtilisateur_id(e.target.value) ?? null} required>
                            <option hidden>Choisissez un utilisateur</option>
                            {
                                props.utilisateurs.map(utilisateur => {
                                    return <option key={Math.random()} value={utilisateur.id ?? ''}>{utilisateur.nom ?? ""} {utilisateur.prenom ?? ""}</option>
                                })
                            } 
                        </select>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='prix'>Prix</label>
                        <input className='form-control' type='number' id='prix' name='prix' 
                        placeholder='Prix' value={props.useInscription.prix ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useInscription.setPrix(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='mode_paiement'>Mode de paiement</label>
                        <input className='form-control' type='text' id='mode_paiement' name='mode_paiement' 
                        placeholder='Mode de paiement' value={props.useInscription.mode_paiement ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useInscription.setMode_paiement(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='status_paiement'>Status du paiement</label>
                        <select className='select2 form-control' id='status_paiement' name='status_paiement' 
                        value={props.useInscription.status_paiement ?? ''} disabled={props.isDisabled} 
                        onChange={ e => props.useInscription.setStatus_paiement(e.target.value) ?? null} required>
                            <option hidden>Choisissez un status de paiement</option>
                            {
                                props.useInscription.statuses.map(status => {
                                    return <option key={Math.random()} value={status ?? ''}>{status}</option>
                                })
                            } 
                        </select>
                    </div>
                </div>
				
                <div className='col-12 text-right'>
                    <button disabled={props.isDisabled ?? false} type='button' className='btn btn-primary' 
                    onClick={props.handleFormSubmit}>
                        <span>Enregistrer</span>
                    </button>
                </div>
            </div>
        </form>
    )
}
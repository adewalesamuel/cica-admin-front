import { Components } from '..'

export function InscriptionForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='pack_id'>Pack_id</label>
                        <select className='select2 form-control' id='pack_id' name='pack_id' value={props.useInscription.pack_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useInscription.setPack_id(e.target.value) ?? null} required>
                            {/* {
                                props.items.map(item => {
                                    return <option key={Math.random()} value={item.id ?? ''}>{item.name}</option>
                                })
                            }  */}
                        </select>
                    </div>
                </div>
				<div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='programme_id'>Programme_id</label>
                        <select className='select2 form-control' id='programme_id' name='programme_id' value={props.useInscription.programme_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useInscription.setProgramme_id(e.target.value) ?? null} required>
                            {/* {
                                props.items.map(item => {
                                    return <option key={Math.random()} value={item.id ?? ''}>{item.name}</option>
                                })
                            }  */}
                        </select>
                    </div>
                </div>
				<div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='utilisateur_id'>Utilisateur_id</label>
                        <select className='select2 form-control' id='utilisateur_id' name='utilisateur_id' value={props.useInscription.utilisateur_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useInscription.setUtilisateur_id(e.target.value) ?? null} required>
                            {/* {
                                props.items.map(item => {
                                    return <option key={Math.random()} value={item.id ?? ''}>{item.name}</option>
                                })
                            }  */}
                        </select>
                    </div>
                </div>
				<div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='prix'>Prix</label>
                        <input className='form-control' type='number' id='prix' name='prix' 
                        placeholder='Prix' value={props.useInscription.prix ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useInscription.setPrix(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='mode_paiement'>Mode_paiement</label>
                        <input className='form-control' type='text' id='mode_paiement' name='mode_paiement' 
                        placeholder='Mode_paiement' value={props.useInscription.mode_paiement ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useInscription.setMode_paiement(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='status_paiement'>Status_paiement</label>
                        <input className='form-control' type='text' id='status_paiement' name='status_paiement' 
                        placeholder='Status_paiement' value={props.useInscription.status_paiement ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useInscription.setStatus_paiement(e.target.value) ?? null} required/>
                    </div>
                </div>
				
                <button disabled={props.isDisabled ?? false} type='button' className='btn btn-primary' 
                onClick={props.handleFormSubmit}>
                    <span>Enregistrer</span>
                </button>
            </div>
        </form>
    )
}
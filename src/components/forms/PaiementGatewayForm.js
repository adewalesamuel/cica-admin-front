import { Components } from '..'

export function PaiementGatewayForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='nom'>Nom</label>
                        <input className='form-control' type='text' id='nom' name='nom' 
                        placeholder='Nom' value={props.usePaiementGateway.nom ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePaiementGateway.setNom(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='infos_connexion'>Infos_connexion</label>
                        <input className='form-control' type='text' id='infos_connexion' name='infos_connexion' 
                        placeholder='Infos_connexion' value={props.usePaiementGateway.infos_connexion ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePaiementGateway.setInfos_connexion(e.target.value) ?? null} required/>
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
import { Components } from '..'

export function PaiementGatewayForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='nom'>Nom</label>
                        <input className='form-control' type='text' id='nom' name='nom' 
                        placeholder='Nom' value={props.usePaiementGateway.nom ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePaiementGateway.setNom(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='identifiant'>identifiant</label>
                        <input className='form-control' type='text' id='identifiant' name='identifiant' 
                        placeholder='Idenntifiant' value={props.usePaiementGateway.identifiant ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePaiementGateway.setIdentifiant(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='password'>Mot de passe</label>
                        <input className='form-control' type='text' id='password' name='password' 
                        placeholder='Mot de passe' value={props.usePaiementGateway.password ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePaiementGateway.setPassword(e.target.value) ?? null} required/>
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
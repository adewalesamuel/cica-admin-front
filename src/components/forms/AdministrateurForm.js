import { Components } from '..'

export function AdministrateurForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='nom_prenom'>Nom prenom</label>
                        <input className='form-control' type='text' id='nom_prenom' name='nom_prenom' 
                        placeholder='Nom prenom' value={props.useAdministrateur.nom_prenom ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdministrateur.setNom_prenom(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input className='form-control' type='text' id='email' name='email' 
                        placeholder='Email' value={props.useAdministrateur.email ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdministrateur.setEmail(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='pasword'>Mot de passe</label>
                        <input className='form-control' type='text' id='pasword' name='pasword' 
                        placeholder='Mot de passe' value={props.useAdministrateur.pasword ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdministrateur.setPasword(e.target.value) ?? null} required/>
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
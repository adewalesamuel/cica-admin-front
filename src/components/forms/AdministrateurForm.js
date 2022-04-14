import { Components } from '..'

export function AdministrateurForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='nom_prenom'>Nom prenoms</label>
                        <input className='form-control' type='text' id='nom_prenom' name='nom_prenom' 
                        placeholder='Nom_prenom' value={props.useAdministrateur.nom_prenom ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdministrateur.setNom_prenom(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input className='form-control' type='text' id='email' name='email' 
                        placeholder='Email' value={props.useAdministrateur.email ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdministrateur.setEmail(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='mot_de_passe'>Mot_de_passe</label>
                        <input className='form-control' type='text' id='mot_de_passe' name='mot_de_passe' 
                        placeholder='Mot_de_passe' value={props.useAdministrateur.mot_de_passe ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdministrateur.setMot_de_passe(e.target.value) ?? null} required/>
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
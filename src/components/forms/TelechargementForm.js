import { Components } from '..'

export function TelechargementForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='nom'>Nom</label>
                        <input className='form-control' type='text' id='nom' name='nom' 
                        placeholder='Nom' value={props.useTelechargement.nom ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useTelechargement.setNom(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <input className='form-control' type='text' id='description' name='description' 
                        placeholder='Description' value={props.useTelechargement.description ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useTelechargement.setDescription(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='fichier'>Document</label>
                        <input className='form-control' type='file' id='fichier' name='fichier' 
                        placeholder='Fichier' value={props.useTelechargement.fichier ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useTelechargement.setFichier(e.target.value) ?? null} required/>
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
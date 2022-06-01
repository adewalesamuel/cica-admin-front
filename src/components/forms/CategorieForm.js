export function CategorieForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='nom'>Nom</label>
                        <input className='form-control' type='text' id='nom' name='nom' 
                        placeholder='Nom' value={props.useCategorie.nom ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useCategorie.setNom(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='couleur'>Couleur</label>
                        <input className='form-control' type='color' id='couleur' name='couleur' 
                        placeholder='Couleur' value={props.useCategorie.couleur ?? ''} disabled={props.isDisabled} 
                        onChange={ e => props.useCategorie.setCouleur(e.target.value) ?? null} required/>
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
export function ProgrammeForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='titre'>Titre</label>
                        <input className='form-control' type='text' id='titre' name='titre' 
                        placeholder='Titre' value={props.useProgramme.titre ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useProgramme.setTitre(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <textarea className='form-control' type='text' id='description' name='description' 
                        placeholder='Description' value={props.useProgramme.description ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useProgramme.setDescription(e.target.value) ?? null} required>

                        </textarea>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='nbr_places'>Nombre de places</label>
                        <input className='form-control' type='number' id='nbr_places' name='nbr_places' 
                        placeholder='Nombre de places' value={props.useProgramme.nbr_places ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useProgramme.setNbr_places(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='date'>Date</label>
                        <input className='form-control' type='date' id='date' name='date' 
                        placeholder='Date' value={props.useProgramme.date ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useProgramme.setDate(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='heure'>Heure</label>
                        <input className='form-control' type='time' id='heure' name='heure' 
                        placeholder='Heure' value={props.useProgramme.heure ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useProgramme.setHeure(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='categorie_id'>Categorie_id</label>
                        <select className='select2 form-control' id='categorie_id' name='categorie_id' value={props.useProgramme.categorie_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useProgramme.setCategorie_id(e.target.value) ?? null} required>
                            <option hidden>Choisissez une categorie</option>
                            {
                                props.categories.map(categorie => {
                                    return <option key={Math.random()} value={categorie.id ?? ''}>{categorie.nom}</option>
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
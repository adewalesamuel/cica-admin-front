import { Components } from '..'

export function ResumeForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='titre'>Titre</label>
                        <input className='form-control' type='text' id='titre' name='titre' 
                        placeholder='Titre' value={props.useResume.titre ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useResume.setTitre(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='mots_cles'>Mots cles</label>
                        <input className='form-control' type='text' id='mots_cles' name='mots_cles' 
                        placeholder='Mots cles' value={props.useResume.mots_cles ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useResume.setMots_cles(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='auteurs'>Auteurs</label>
                        <input className='form-control' type='text' id='auteurs' name='auteurs' 
                        placeholder='Auteurs' value={props.useResume.auteurs ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useResume.setAuteurs(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='fichier'>Abstract <sup>(en pdf)</sup></label>
                        <input className='form-control' type='file' name='fichier' id='ficher' 
                        disabled={props.isDisabled} onChange={e => props.useResume.setFichier(e.target.files[0])}/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='status'>Status</label>
                        <select className='select2 form-control' id='status' name='status' 
                        value={props.useResume.status ?? ''} disabled={props.isDisabled} 
                        onChange={ e => props.useResume.setStatus(e.target.value) ?? null} required>
                            {
                                props.useResume.statuses.map(status => {
                                    return <option key={Math.random()} value={status ?? ''}>{status}</option>
                                })
                            } 
                        </select>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='utilisateur_id'>Utilisateur </label>
                        <select className='select2 form-control' id='utilisateur_id' name='utilisateur_id' value={props.useResume.utilisateur_id ?? ''} disabled={props.isDisabled} 
                        onChange={ e => props.useResume.setUtilisateur_id(e.target.value) ?? null} required>
                            <option hidden>Choisissez un utilisateur</option>
                            {
                                props.utilisateurs.map(utilisateur => {
                                    return <option key={Math.random()} value={utilisateur.id ?? ''}>{utilisateur.prenom ?? ''} {utilisateur.nom ?? ''}</option>
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
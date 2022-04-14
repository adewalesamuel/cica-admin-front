import { Components } from '..'

export function ResumeForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='titre'>Titre</label>
                        <input className='form-control' type='text' id='titre' name='titre' 
                        placeholder='Titre' value={props.useResume.titre ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useResume.setTitre(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='mot_cles'>Mot_cles</label>
                        <input className='form-control' type='text' id='mot_cles' name='mot_cles' 
                        placeholder='Mot_cles' value={props.useResume.mot_cles ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useResume.setMot_cles(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='auteurs'>Auteurs</label>
                        <input className='form-control' type='text' id='auteurs' name='auteurs' 
                        placeholder='Auteurs' value={props.useResume.auteurs ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useResume.setAuteurs(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='contenu'>Contenu</label>
                        <input className='form-control' type='text' id='contenu' name='contenu' 
                        placeholder='Contenu' value={props.useResume.contenu ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useResume.setContenu(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='status'>Status</label>
                        <input className='form-control' type='text' id='status' name='status' 
                        placeholder='Status' value={props.useResume.status ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useResume.setStatus(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='utilsateur_id'>Utilsateur_id</label>
                        <select className='select2 form-control' id='utilsateur_id' name='utilsateur_id' value={props.useResume.utilsateur_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useResume.setUtilsateur_id(e.target.value) ?? null} required>
                            {/* {
                                props.items.map(item => {
                                    return <option key={Math.random()} value={item.id ?? ''}>{item.name}</option>
                                })
                            }  */}
                        </select>
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
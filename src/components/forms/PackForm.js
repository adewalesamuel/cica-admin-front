import { Components } from '..'

export function PackForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='qualification'>Qualification</label>
                        <input className='form-control' type='text' id='qualification' name='qualification' 
                        placeholder='Qualification' value={props.usePack.qualification ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePack.setQualification(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='prix'>Prix</label>
                        <input className='form-control' type='number' id='prix' name='prix' 
                        placeholder='Prix' value={props.usePack.prix ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePack.setPrix(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='regle_prix'>Regle_prix</label>
                        <input className='form-control' type='text' id='regle_prix' name='regle_prix' 
                        placeholder='Regle_prix' value={props.usePack.regle_prix ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePack.setRegle_prix(e.target.value) ?? null} required/>
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
import { useState, } from "react";
import { Services } from '../services';
import { Hooks } from '../hooks';
import { Utils } from "../utils";

export function LoginView(props) {
  const abortController = new AbortController();
  const useAdministrateur = Hooks.useAdministrateur();
  
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleFormSubmit = event => {
    event.preventDefault();

      setIsDisabled(true);

      const payload = {
          email : useAdministrateur.email,
          password: useAdministrateur.password
      };

      Services.AuthService.login(JSON.stringify(payload), abortController.signal)
      .then(response => {
        Utils.Auth.setSessionToken(response.administrateur.api_token);
        Utils.Auth.setUser(response.administrateur);

        window.location.replace('/');
      })
      .catch(err => setIsDisabled(false));
   
    }
    
    return (
      <div className="account-pages my-5 pt-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center mb-5">
                        <a href="index.html" className="logo"><img src="/assets/images/logo-light.png" height="24" alt="logo" /></a>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-5">
                    <div className="card">
                        <div className="card-body p-4">
                            <div className="p-2">
                                <h5 className="mb-5 text-center">Bienvenu à l'epace d'administration CICA 2022</h5>
                                <form className="form-horizontal" disabled={isDisabled} onSubmit={handleFormSubmit ?? null}>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group mb-4">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" className="form-control" id="email" placeholder="Votre email" 
                                                onChange={e => useAdministrateur.setEmail(e.target.value)} disabled={isDisabled}/>
                                            </div>
                                            <div className="form-group mb-4">
                                                <label htmlFor="mot_de_passe">Mot de passe</label>
                                                <input type="password" className="form-control" id="mot_de_passe" placeholder="Votre Mot de passe" onChange={e => useAdministrateur.setPassword(e.target.value)} disabled={isDisabled}/>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                        <label className="custom-control-label" htmlFor="customControlInline">Se souvenir de moi</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="text-md-right mt-3 mt-md-0">
                                                        <a href="auth-recoverpw.html" className="text-muted"><i className="mdi mdi-lock"></i> Mot de passe oublié?</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <button className="btn btn-success btn-block waves-effect waves-light" type="submit" disabled={isDisabled}>Connexion</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
} 
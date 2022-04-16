import { Components } from "..";
import {Route, Routes} from 'react-router-dom'
import { Views } from "../../views";

export function MainLayout(props) {
    return (
        <>
            <Components.Header />
            <Components.MainMenu />
            <div id="layout-wrapper">
                <div className="main-content">
                    <div className="page-content">
                        <div className="container-fluid">
                            <Routes>
                                <Route exact path="" element={<Views.DashboardView />} />
                                <Route exact path="inscriptions/:id/modifier" element={<Views.InscriptionEditView />} />
                                <Route exact path="inscriptions/creer" element={<Views.InscriptionCreateView />} />
                                <Route exact path="inscriptions" element={<Views.InscriptionListView />} />
                                <Route exact path="telechargements/:id/modifier" element={<Views.TelechargementEditView />} />
                                <Route exact path="telechargements/creer" element={<Views.TelechargementCreateView />} />
                                <Route exact path="telechargements" element={<Views.TelechargementListView />} />
                                <Route exact path="packs/:id/modifier" element={<Views.PackEditView />} />
                                <Route exact path="packs/creer" element={<Views.PackCreateView />} />
                                <Route exact path="packs" element={<Views.PackListView />} />
                                <Route exact path="programmes/:id/modifier" element={<Views.ProgrammeEditView />} />
                                <Route exact path="programmes/creer" element={<Views.ProgrammeCreateView />} />
                                <Route exact path="programmes" element={<Views.ProgrammeListView />} />
                                <Route exact path="categories/:id/modifier" element={<Views.CategorieEditView />} />
                                <Route exact path="categories/creer" element={<Views.CategorieCreateView />} />
                                <Route exact path="categories" element={<Views.CategorieListView />} />
                                <Route exact path="resumes/:id/modifier" element={<Views.ResumeEditView />} />
                                <Route exact path="resumes/creer" element={<Views.ResumeCreateView />} />
                                <Route exact path="resumes" element={<Views.ResumeListView />} />
                                <Route exact path="administrateurs/:id/modifier" element={<Views.AdministrateurEditView />} />
                                <Route exact path="administrateurs/creer" element={<Views.AdministrateurCreateView />} />
                                <Route exact path="administrateurs" element={<Views.AdministrateurListView />} />
                                <Route exact path="utilisateurs/:id/modifier" element={<Views.UtilisateurEditView />} />
                                <Route exact path="utilisateurs/creer" element={<Views.UtilisateurCreateView />} />
                                <Route exact path="utilisateurs" element={<Views.UtilisateurListView />} />
                            </Routes>
                        </div>
                    </div>
                    <Components.Footer />
                </div>
            </div>
        </>
    )
}
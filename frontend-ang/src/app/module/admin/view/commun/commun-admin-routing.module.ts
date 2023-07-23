
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { TauxTaxTnbListAdminComponent } from './taux-tax-tnb-admin/list-admin/taux-tax-tnb-list-admin.component';
import { CategorieTerrainListAdminComponent } from './categorie-terrain-admin/list-admin/categorie-terrain-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'taux-tax-tnb',
                            children: [
                                {
                                    path: 'list',
                                    component: TauxTaxTnbListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'categorie-terrain',
                            children: [
                                {
                                    path: 'list',
                                    component: CategorieTerrainListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class CommunAdminRoutingModule { }

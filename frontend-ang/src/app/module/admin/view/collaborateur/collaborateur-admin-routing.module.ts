
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { RedevableListAdminComponent } from './redevable-admin/list-admin/redevable-list-admin.component';
import { TerrainListAdminComponent } from './terrain-admin/list-admin/terrain-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'redevable',
                            children: [
                                {
                                    path: 'list',
                                    component: RedevableListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'terrain',
                            children: [
                                {
                                    path: 'list',
                                    component: TerrainListAdminComponent ,
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
export class CollaborateurAdminRoutingModule { }

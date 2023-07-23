import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {CategorieTerrainService} from 'src/app/controller/service/CategorieTerrain.service';
import {CategorieTerrainDto} from 'src/app/controller/model/CategorieTerrain.model';
import {CategorieTerrainCriteria} from 'src/app/controller/criteria/CategorieTerrainCriteria.model';

@Component({
  selector: 'app-categorie-terrain-view-admin',
  templateUrl: './categorie-terrain-view-admin.component.html'
})
export class CategorieTerrainViewAdminComponent extends AbstractViewController<CategorieTerrainDto, CategorieTerrainCriteria, CategorieTerrainService> implements OnInit {


    constructor(private categorieTerrainService: CategorieTerrainService){
        super(categorieTerrainService);
    }

    ngOnInit(): void {
    }




}

import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TauxTaxTnbService} from 'src/app/controller/service/TauxTaxTnb.service';
import {TauxTaxTnbDto} from 'src/app/controller/model/TauxTaxTnb.model';
import {TauxTaxTnbCriteria} from 'src/app/controller/criteria/TauxTaxTnbCriteria.model';

import {CategorieTerrainDto} from 'src/app/controller/model/CategorieTerrain.model';
import {CategorieTerrainService} from 'src/app/controller/service/CategorieTerrain.service';
@Component({
  selector: 'app-taux-tax-tnb-view-admin',
  templateUrl: './taux-tax-tnb-view-admin.component.html'
})
export class TauxTaxTnbViewAdminComponent extends AbstractViewController<TauxTaxTnbDto, TauxTaxTnbCriteria, TauxTaxTnbService> implements OnInit {


    constructor(private tauxTaxTnbService: TauxTaxTnbService, private categorieTerrainService: CategorieTerrainService){
        super(tauxTaxTnbService);
    }

    ngOnInit(): void {
        this.categorieTerrain = new CategorieTerrainDto();
        this.categorieTerrainService.findAll().subscribe((data) => this.categorieTerrains = data);
    }


    get categorieTerrain(): CategorieTerrainDto {
       return this.categorieTerrainService.item;
    }
    set categorieTerrain(value: CategorieTerrainDto) {
        this.categorieTerrainService.item = value;
    }
    get categorieTerrains():Array<CategorieTerrainDto> {
       return this.categorieTerrainService.items;
    }
    set categorieTerrains(value: Array<CategorieTerrainDto>) {
        this.categorieTerrainService.items = value;
    }


}

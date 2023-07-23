import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TerrainService} from 'src/app/controller/service/Terrain.service';
import {TerrainDto} from 'src/app/controller/model/Terrain.model';
import {TerrainCriteria} from 'src/app/controller/criteria/TerrainCriteria.model';

import {RedevableDto} from 'src/app/controller/model/Redevable.model';
import {RedevableService} from 'src/app/controller/service/Redevable.service';
import {CategorieTerrainDto} from 'src/app/controller/model/CategorieTerrain.model';
import {CategorieTerrainService} from 'src/app/controller/service/CategorieTerrain.service';
@Component({
  selector: 'app-terrain-view-admin',
  templateUrl: './terrain-view-admin.component.html'
})
export class TerrainViewAdminComponent extends AbstractViewController<TerrainDto, TerrainCriteria, TerrainService> implements OnInit {


    constructor(private terrainService: TerrainService, private redevableService: RedevableService, private categorieTerrainService: CategorieTerrainService){
        super(terrainService);
    }

    ngOnInit(): void {
        this.categorieTerrain = new CategorieTerrainDto();
        this.categorieTerrainService.findAll().subscribe((data) => this.categorieTerrains = data);
        this.redevable = new RedevableDto();
        this.redevableService.findAll().subscribe((data) => this.redevables = data);
    }


    get redevable(): RedevableDto {
       return this.redevableService.item;
    }
    set redevable(value: RedevableDto) {
        this.redevableService.item = value;
    }
    get redevables():Array<RedevableDto> {
       return this.redevableService.items;
    }
    set redevables(value: Array<RedevableDto>) {
        this.redevableService.items = value;
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

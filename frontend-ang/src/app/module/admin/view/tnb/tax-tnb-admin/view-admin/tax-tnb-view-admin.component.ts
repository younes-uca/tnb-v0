import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TaxTnbService} from 'src/app/controller/service/TaxTnb.service';
import {TaxTnbDto} from 'src/app/controller/model/TaxTnb.model';
import {TaxTnbCriteria} from 'src/app/controller/criteria/TaxTnbCriteria.model';

import {RedevableDto} from 'src/app/controller/model/Redevable.model';
import {RedevableService} from 'src/app/controller/service/Redevable.service';
import {TauxTaxTnbDto} from 'src/app/controller/model/TauxTaxTnb.model';
import {TauxTaxTnbService} from 'src/app/controller/service/TauxTaxTnb.service';
import {TerrainDto} from 'src/app/controller/model/Terrain.model';
import {TerrainService} from 'src/app/controller/service/Terrain.service';
@Component({
  selector: 'app-tax-tnb-view-admin',
  templateUrl: './tax-tnb-view-admin.component.html'
})
export class TaxTnbViewAdminComponent extends AbstractViewController<TaxTnbDto, TaxTnbCriteria, TaxTnbService> implements OnInit {


    constructor(private taxTnbService: TaxTnbService, private redevableService: RedevableService, private tauxTaxTnbService: TauxTaxTnbService, private terrainService: TerrainService){
        super(taxTnbService);
    }

    ngOnInit(): void {
        this.redevable = new RedevableDto();
        this.redevableService.findAll().subscribe((data) => this.redevables = data);
        this.terrain = new TerrainDto();
        this.terrainService.findAll().subscribe((data) => this.terrains = data);
        this.tauxTaxTnb = new TauxTaxTnbDto();
        this.tauxTaxTnbService.findAll().subscribe((data) => this.tauxTaxTnbs = data);
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
    get terrain(): TerrainDto {
       return this.terrainService.item;
    }
    set terrain(value: TerrainDto) {
        this.terrainService.item = value;
    }
    get terrains():Array<TerrainDto> {
       return this.terrainService.items;
    }
    set terrains(value: Array<TerrainDto>) {
        this.terrainService.items = value;
    }
    get tauxTaxTnb(): TauxTaxTnbDto {
       return this.tauxTaxTnbService.item;
    }
    set tauxTaxTnb(value: TauxTaxTnbDto) {
        this.tauxTaxTnbService.item = value;
    }
    get tauxTaxTnbs():Array<TauxTaxTnbDto> {
       return this.tauxTaxTnbService.items;
    }
    set tauxTaxTnbs(value: Array<TauxTaxTnbDto>) {
        this.tauxTaxTnbService.items = value;
    }


}

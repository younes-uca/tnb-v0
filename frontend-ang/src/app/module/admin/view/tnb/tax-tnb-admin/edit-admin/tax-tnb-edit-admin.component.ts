import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

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
  selector: 'app-tax-tnb-edit-admin',
  templateUrl: './tax-tnb-edit-admin.component.html'
})
export class TaxTnbEditAdminComponent extends AbstractEditController<TaxTnbDto, TaxTnbCriteria, TaxTnbService>   implements OnInit {



    private _validRedevableCin = true;
    private _validTerrainRef = true;



    constructor( private taxTnbService: TaxTnbService , private redevableService: RedevableService, private tauxTaxTnbService: TauxTaxTnbService, private terrainService: TerrainService) {
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
    public prepareEdit() {
        this.item.datePresentation = this.taxTnbService.format(this.item.datePresentation);
        this.item.dateTaxeTnb = this.taxTnbService.format(this.item.dateTaxeTnb);
    }



    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }




   get redevable(): RedevableDto {
       return this.redevableService.item;
   }
  set redevable(value: RedevableDto) {
        this.redevableService.item = value;
   }
   get redevables(): Array<RedevableDto> {
        return this.redevableService.items;
   }
   set redevables(value: Array<RedevableDto>) {
        this.redevableService.items = value;
   }
   get createRedevableDialog(): boolean {
       return this.redevableService.createDialog;
   }
  set createRedevableDialog(value: boolean) {
       this.redevableService.createDialog= value;
   }
   get terrain(): TerrainDto {
       return this.terrainService.item;
   }
  set terrain(value: TerrainDto) {
        this.terrainService.item = value;
   }
   get terrains(): Array<TerrainDto> {
        return this.terrainService.items;
   }
   set terrains(value: Array<TerrainDto>) {
        this.terrainService.items = value;
   }
   get createTerrainDialog(): boolean {
       return this.terrainService.createDialog;
   }
  set createTerrainDialog(value: boolean) {
       this.terrainService.createDialog= value;
   }
   get tauxTaxTnb(): TauxTaxTnbDto {
       return this.tauxTaxTnbService.item;
   }
  set tauxTaxTnb(value: TauxTaxTnbDto) {
        this.tauxTaxTnbService.item = value;
   }
   get tauxTaxTnbs(): Array<TauxTaxTnbDto> {
        return this.tauxTaxTnbService.items;
   }
   set tauxTaxTnbs(value: Array<TauxTaxTnbDto>) {
        this.tauxTaxTnbService.items = value;
   }
   get createTauxTaxTnbDialog(): boolean {
       return this.tauxTaxTnbService.createDialog;
   }
  set createTauxTaxTnbDialog(value: boolean) {
       this.tauxTaxTnbService.createDialog= value;
   }



    get validRedevableCin(): boolean {
        return this._validRedevableCin;
    }
    set validRedevableCin(value: boolean) {
        this._validRedevableCin = value;
    }
    get validTerrainRef(): boolean {
        return this._validTerrainRef;
    }
    set validTerrainRef(value: boolean) {
        this._validTerrainRef = value;
    }
}

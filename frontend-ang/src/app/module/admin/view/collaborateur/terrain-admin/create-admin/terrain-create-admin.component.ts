import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TerrainService} from 'src/app/controller/service/Terrain.service';
import {TerrainDto} from 'src/app/controller/model/Terrain.model';
import {TerrainCriteria} from 'src/app/controller/criteria/TerrainCriteria.model';
import {RedevableDto} from 'src/app/controller/model/Redevable.model';
import {RedevableService} from 'src/app/controller/service/Redevable.service';
import {CategorieTerrainDto} from 'src/app/controller/model/CategorieTerrain.model';
import {CategorieTerrainService} from 'src/app/controller/service/CategorieTerrain.service';
@Component({
  selector: 'app-terrain-create-admin',
  templateUrl: './terrain-create-admin.component.html'
})
export class TerrainCreateAdminComponent extends AbstractCreateController<TerrainDto, TerrainCriteria, TerrainService>  implements OnInit {



   private _validTerrainRef = true;
    private _validCategorieTerrainCode = true;
    private _validCategorieTerrainLibelle = true;
    private _validRedevableCin = true;

    constructor( private terrainService: TerrainService , private redevableService: RedevableService, private categorieTerrainService: CategorieTerrainService) {
        super(terrainService);
    }

    ngOnInit(): void {
    this.categorieTerrain = new CategorieTerrainDto();
    this.categorieTerrainService.findAll().subscribe((data) => this.categorieTerrains = data);
    this.redevable = new RedevableDto();
    this.redevableService.findAll().subscribe((data) => this.redevables = data);
}





    public setValidation(value: boolean){
        this.validTerrainRef = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTerrainRef();
    }

    public validateTerrainRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validTerrainRef = false;
        } else {
            this.validTerrainRef = true;
        }
    }


    public async openCreateRedevable(redevable: string) {
    const isPermistted = await this.roleService.isPermitted('Redevable', 'add');
    if(isPermistted) {
         this.redevable = new RedevableDto();
         this.createRedevableDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
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
    get categorieTerrain(): CategorieTerrainDto {
        return this.categorieTerrainService.item;
    }
    set categorieTerrain(value: CategorieTerrainDto) {
        this.categorieTerrainService.item = value;
    }
    get categorieTerrains(): Array<CategorieTerrainDto> {
        return this.categorieTerrainService.items;
    }
    set categorieTerrains(value: Array<CategorieTerrainDto>) {
        this.categorieTerrainService.items = value;
    }
    get createCategorieTerrainDialog(): boolean {
       return this.categorieTerrainService.createDialog;
    }
    set createCategorieTerrainDialog(value: boolean) {
        this.categorieTerrainService.createDialog= value;
    }



    get validTerrainRef(): boolean {
        return this._validTerrainRef;
    }

    set validTerrainRef(value: boolean) {
         this._validTerrainRef = value;
    }

    get validCategorieTerrainCode(): boolean {
        return this._validCategorieTerrainCode;
    }
    set validCategorieTerrainCode(value: boolean) {
        this._validCategorieTerrainCode = value;
    }
    get validCategorieTerrainLibelle(): boolean {
        return this._validCategorieTerrainLibelle;
    }
    set validCategorieTerrainLibelle(value: boolean) {
        this._validCategorieTerrainLibelle = value;
    }
    get validRedevableCin(): boolean {
        return this._validRedevableCin;
    }
    set validRedevableCin(value: boolean) {
        this._validRedevableCin = value;
    }


}

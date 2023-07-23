import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {CategorieTerrainService} from 'src/app/controller/service/CategorieTerrain.service';
import {CategorieTerrainDto} from 'src/app/controller/model/CategorieTerrain.model';
import {CategorieTerrainCriteria} from 'src/app/controller/criteria/CategorieTerrainCriteria.model';



@Component({
  selector: 'app-categorie-terrain-edit-admin',
  templateUrl: './categorie-terrain-edit-admin.component.html'
})
export class CategorieTerrainEditAdminComponent extends AbstractEditController<CategorieTerrainDto, CategorieTerrainCriteria, CategorieTerrainService>   implements OnInit {


    private _validCategorieTerrainCode = true;
    private _validCategorieTerrainLibelle = true;




    constructor( private categorieTerrainService: CategorieTerrainService ) {
        super(categorieTerrainService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validCategorieTerrainCode = value;
        this.validCategorieTerrainLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCategorieTerrainCode();
        this.validateCategorieTerrainLibelle();
    }
    public validateCategorieTerrainCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validCategorieTerrainCode = false;
        } else {
            this.validCategorieTerrainCode = true;
        }
    }
    public validateCategorieTerrainLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validCategorieTerrainLibelle = false;
        } else {
            this.validCategorieTerrainLibelle = true;
        }
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

}

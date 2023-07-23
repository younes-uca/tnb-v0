import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TauxTaxTnbService} from 'src/app/controller/service/TauxTaxTnb.service';
import {TauxTaxTnbDto} from 'src/app/controller/model/TauxTaxTnb.model';
import {TauxTaxTnbCriteria} from 'src/app/controller/criteria/TauxTaxTnbCriteria.model';
import {CategorieTerrainDto} from 'src/app/controller/model/CategorieTerrain.model';
import {CategorieTerrainService} from 'src/app/controller/service/CategorieTerrain.service';
@Component({
  selector: 'app-taux-tax-tnb-create-admin',
  templateUrl: './taux-tax-tnb-create-admin.component.html'
})
export class TauxTaxTnbCreateAdminComponent extends AbstractCreateController<TauxTaxTnbDto, TauxTaxTnbCriteria, TauxTaxTnbService>  implements OnInit {



    private _validCategorieTerrainCode = true;
    private _validCategorieTerrainLibelle = true;

    constructor( private tauxTaxTnbService: TauxTaxTnbService , private categorieTerrainService: CategorieTerrainService) {
        super(tauxTaxTnbService);
    }

    ngOnInit(): void {
    this.categorieTerrain = new CategorieTerrainDto();
    this.categorieTerrainService.findAll().subscribe((data) => this.categorieTerrains = data);
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateCategorieTerrain(categorieTerrain: string) {
    const isPermistted = await this.roleService.isPermitted('CategorieTerrain', 'add');
    if(isPermistted) {
         this.categorieTerrain = new CategorieTerrainDto();
         this.createCategorieTerrainDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
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

import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {RedevableService} from 'src/app/controller/service/Redevable.service';
import {RedevableDto} from 'src/app/controller/model/Redevable.model';
import {RedevableCriteria} from 'src/app/controller/criteria/RedevableCriteria.model';



@Component({
  selector: 'app-redevable-edit-admin',
  templateUrl: './redevable-edit-admin.component.html'
})
export class RedevableEditAdminComponent extends AbstractEditController<RedevableDto, RedevableCriteria, RedevableService>   implements OnInit {


    private _validRedevableCin = true;




    constructor( private redevableService: RedevableService ) {
        super(redevableService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validRedevableCin = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateRedevableCin();
    }
    public validateRedevableCin(){
        if (this.stringUtilService.isEmpty(this.item.cin)) {
            this.errorMessages.push('Cin non valide');
            this.validRedevableCin = false;
        } else {
            this.validRedevableCin = true;
        }
    }






    get validRedevableCin(): boolean {
        return this._validRedevableCin;
    }
    set validRedevableCin(value: boolean) {
        this._validRedevableCin = value;
    }

}

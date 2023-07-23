import {Component, OnInit} from '@angular/core';
import {RedevableService} from 'src/app/controller/service/Redevable.service';
import {RedevableDto} from 'src/app/controller/model/Redevable.model';
import {RedevableCriteria} from 'src/app/controller/criteria/RedevableCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-redevable-list-admin',
  templateUrl: './redevable-list-admin.component.html'
})
export class RedevableListAdminComponent extends AbstractListController<RedevableDto, RedevableCriteria, RedevableService>  implements OnInit {

    fileName = 'Redevable';


constructor( private redevableService: RedevableService ) {
        super(redevableService);
        this.pdfName='Redevable.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadRedevables(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Redevable', 'list');
        isPermistted ? this.service.findAll().subscribe(redevables => this.items = redevables,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'nom', header: 'Nom'},
            {field: 'prenom', header: 'Prenom'},
            {field: 'cin', header: 'Cin'},
        ];
    }



	public initDuplicate(res: RedevableDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Nom': e.nom ,
                 'Prenom': e.prenom ,
                 'Cin': e.cin ,
            }
        });

        this.criteriaData = [{
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
            'Prenom': this.criteria.prenom ? this.criteria.prenom : environment.emptyForExport ,
            'Cin': this.criteria.cin ? this.criteria.cin : environment.emptyForExport ,
        }];
      }
}

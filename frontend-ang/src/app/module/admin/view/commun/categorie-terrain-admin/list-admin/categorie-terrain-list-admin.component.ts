import {Component, OnInit} from '@angular/core';
import {CategorieTerrainService} from 'src/app/controller/service/CategorieTerrain.service';
import {CategorieTerrainDto} from 'src/app/controller/model/CategorieTerrain.model';
import {CategorieTerrainCriteria} from 'src/app/controller/criteria/CategorieTerrainCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-categorie-terrain-list-admin',
  templateUrl: './categorie-terrain-list-admin.component.html'
})
export class CategorieTerrainListAdminComponent extends AbstractListController<CategorieTerrainDto, CategorieTerrainCriteria, CategorieTerrainService>  implements OnInit {

    fileName = 'CategorieTerrain';


constructor( private categorieTerrainService: CategorieTerrainService ) {
        super(categorieTerrainService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadCategorieTerrains(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('CategorieTerrain', 'list');
        isPermistted ? this.service.findAll().subscribe(categorieTerrains => this.items = categorieTerrains,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: CategorieTerrainDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}

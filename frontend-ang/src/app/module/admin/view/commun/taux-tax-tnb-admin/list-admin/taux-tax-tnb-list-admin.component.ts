import {Component, OnInit} from '@angular/core';
import {TauxTaxTnbService} from 'src/app/controller/service/TauxTaxTnb.service';
import {TauxTaxTnbDto} from 'src/app/controller/model/TauxTaxTnb.model';
import {TauxTaxTnbCriteria} from 'src/app/controller/criteria/TauxTaxTnbCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {CategorieTerrainDto} from 'src/app/controller/model/CategorieTerrain.model';
import {CategorieTerrainService} from 'src/app/controller/service/CategorieTerrain.service';


@Component({
  selector: 'app-taux-tax-tnb-list-admin',
  templateUrl: './taux-tax-tnb-list-admin.component.html'
})
export class TauxTaxTnbListAdminComponent extends AbstractListController<TauxTaxTnbDto, TauxTaxTnbCriteria, TauxTaxTnbService>  implements OnInit {

    fileName = 'TauxTaxTnb';

    categorieTerrains :Array<CategorieTerrainDto>;

constructor( private tauxTaxTnbService: TauxTaxTnbService , private categorieTerrainService: CategorieTerrainService) {
        super(tauxTaxTnbService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadCategorieTerrain();
    }

    public async loadTauxTaxTnbs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TauxTaxTnb', 'list');
        isPermistted ? this.service.findAll().subscribe(tauxTaxTnbs => this.items = tauxTaxTnbs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'prixMetreCarre', header: 'Prix metre carre'},
            {field: 'prixRetardMetreCarre', header: 'Prix retard metre carre'},
            {field: 'categorieTerrain?.libelle', header: 'Categorie terrain'},
        ];
    }


    public async loadCategorieTerrain(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TauxTaxTnb', 'list');
        isPermistted ? this.categorieTerrainService.findAllOptimized().subscribe(categorieTerrains => this.categorieTerrains = categorieTerrains,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: TauxTaxTnbDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Prix metre carre': e.prixMetreCarre ,
                 'Prix retard metre carre': e.prixRetardMetreCarre ,
                'Categorie terrain': e.categorieTerrain?.libelle ,
            }
        });

        this.criteriaData = [{
            'Prix metre carre Min': this.criteria.prixMetreCarreMin ? this.criteria.prixMetreCarreMin : environment.emptyForExport ,
            'Prix metre carre Max': this.criteria.prixMetreCarreMax ? this.criteria.prixMetreCarreMax : environment.emptyForExport ,
            'Prix retard metre carre Min': this.criteria.prixRetardMetreCarreMin ? this.criteria.prixRetardMetreCarreMin : environment.emptyForExport ,
            'Prix retard metre carre Max': this.criteria.prixRetardMetreCarreMax ? this.criteria.prixRetardMetreCarreMax : environment.emptyForExport ,
        //'Categorie terrain': this.criteria.categorieTerrain?.libelle ? this.criteria.categorieTerrain?.libelle : environment.emptyForExport ,
        }];
      }
}

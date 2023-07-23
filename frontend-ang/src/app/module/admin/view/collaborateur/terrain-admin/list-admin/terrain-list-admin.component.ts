import {Component, OnInit} from '@angular/core';
import {TerrainService} from 'src/app/controller/service/Terrain.service';
import {TerrainDto} from 'src/app/controller/model/Terrain.model';
import {TerrainCriteria} from 'src/app/controller/criteria/TerrainCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {RedevableDto} from 'src/app/controller/model/Redevable.model';
import {RedevableService} from 'src/app/controller/service/Redevable.service';
import {CategorieTerrainDto} from 'src/app/controller/model/CategorieTerrain.model';
import {CategorieTerrainService} from 'src/app/controller/service/CategorieTerrain.service';


@Component({
  selector: 'app-terrain-list-admin',
  templateUrl: './terrain-list-admin.component.html'
})
export class TerrainListAdminComponent extends AbstractListController<TerrainDto, TerrainCriteria, TerrainService>  implements OnInit {

    fileName = 'Terrain';

    categorieTerrains :Array<CategorieTerrainDto>;
    redevables :Array<RedevableDto>;

constructor( private terrainService: TerrainService , private redevableService: RedevableService, private categorieTerrainService: CategorieTerrainService) {
        super(terrainService);
        this.pdfName='Terrain.pdf';
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadCategorieTerrain();
      this.loadRedevable();
    }

    public async loadTerrains(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Terrain', 'list');
        isPermistted ? this.service.findAll().subscribe(terrains => this.items = terrains,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'categorieTerrain?.libelle', header: 'Categorie terrain'},
            {field: 'redevable?.cin', header: 'Redevable'},
        ];
    }


    public async loadCategorieTerrain(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Terrain', 'list');
        isPermistted ? this.categorieTerrainService.findAllOptimized().subscribe(categorieTerrains => this.categorieTerrains = categorieTerrains,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadRedevable(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Terrain', 'list');
        isPermistted ? this.redevableService.findAllOptimized().subscribe(redevables => this.redevables = redevables,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: TerrainDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                'Categorie terrain': e.categorieTerrain?.libelle ,
                'Redevable': e.redevable?.cin ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
        //'Categorie terrain': this.criteria.categorieTerrain?.libelle ? this.criteria.categorieTerrain?.libelle : environment.emptyForExport ,
        //'Redevable': this.criteria.redevable?.cin ? this.criteria.redevable?.cin : environment.emptyForExport ,
        }];
      }
}

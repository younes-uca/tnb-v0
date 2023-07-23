import {Component, OnInit} from '@angular/core';
import {TaxTnbService} from 'src/app/controller/service/TaxTnb.service';
import {TaxTnbDto} from 'src/app/controller/model/TaxTnb.model';
import {TaxTnbCriteria} from 'src/app/controller/criteria/TaxTnbCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {RedevableDto} from 'src/app/controller/model/Redevable.model';
import {RedevableService} from 'src/app/controller/service/Redevable.service';
import {TauxTaxTnbDto} from 'src/app/controller/model/TauxTaxTnb.model';
import {TauxTaxTnbService} from 'src/app/controller/service/TauxTaxTnb.service';
import {TerrainDto} from 'src/app/controller/model/Terrain.model';
import {TerrainService} from 'src/app/controller/service/Terrain.service';


@Component({
  selector: 'app-tax-tnb-list-admin',
  templateUrl: './tax-tnb-list-admin.component.html'
})
export class TaxTnbListAdminComponent extends AbstractListController<TaxTnbDto, TaxTnbCriteria, TaxTnbService>  implements OnInit {

    fileName = 'TaxTnb';

    redevables :Array<RedevableDto>;
    terrains :Array<TerrainDto>;
    tauxTaxTnbs :Array<TauxTaxTnbDto>;

constructor( private taxTnbService: TaxTnbService , private redevableService: RedevableService, private tauxTaxTnbService: TauxTaxTnbService, private terrainService: TerrainService) {
        super(taxTnbService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadRedevable();
      this.loadTerrain();
      this.loadTauxTaxTnb();
    }

    public async loadTaxTnbs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TaxTnb', 'list');
        isPermistted ? this.service.findAll().subscribe(taxTnbs => this.items = taxTnbs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'annee', header: 'Annee'},
            {field: 'montantBase', header: 'Montant base'},
            {field: 'mantantRetard', header: 'Mantant retard'},
            {field: 'nombreMoisRetard', header: 'Nombre mois retard'},
            {field: 'montantTotal', header: 'Montant total'},
            {field: 'datePresentation', header: 'Date presentation'},
            {field: 'dateTaxeTnb', header: 'Date taxe tnb'},
            {field: 'redevable?.cin', header: 'Redevable'},
            {field: 'terrain?.ref', header: 'Terrain'},
            {field: 'tauxTaxTnb?.id', header: 'Taux tax tnb'},
        ];
    }


    public async loadRedevable(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TaxTnb', 'list');
        isPermistted ? this.redevableService.findAllOptimized().subscribe(redevables => this.redevables = redevables,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadTerrain(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TaxTnb', 'list');
        isPermistted ? this.terrainService.findAllOptimized().subscribe(terrains => this.terrains = terrains,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadTauxTaxTnb(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TaxTnb', 'list');
        isPermistted ? this.tauxTaxTnbService.findAll().subscribe(tauxTaxTnbs => this.tauxTaxTnbs = tauxTaxTnbs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: TaxTnbDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Annee': e.annee ,
                 'Montant base': e.montantBase ,
                 'Mantant retard': e.mantantRetard ,
                 'Nombre mois retard': e.nombreMoisRetard ,
                 'Montant total': e.montantTotal ,
                'Date presentation': this.datePipe.transform(e.datePresentation , 'dd/MM/yyyy hh:mm'),
                'Date taxe tnb': this.datePipe.transform(e.dateTaxeTnb , 'dd/MM/yyyy hh:mm'),
                'Redevable': e.redevable?.cin ,
                'Terrain': e.terrain?.ref ,
                'Taux tax tnb': e.tauxTaxTnb?.id ,
            }
        });

        this.criteriaData = [{
            'Annee Min': this.criteria.anneeMin ? this.criteria.anneeMin : environment.emptyForExport ,
            'Annee Max': this.criteria.anneeMax ? this.criteria.anneeMax : environment.emptyForExport ,
            'Montant base Min': this.criteria.montantBaseMin ? this.criteria.montantBaseMin : environment.emptyForExport ,
            'Montant base Max': this.criteria.montantBaseMax ? this.criteria.montantBaseMax : environment.emptyForExport ,
            'Mantant retard Min': this.criteria.mantantRetardMin ? this.criteria.mantantRetardMin : environment.emptyForExport ,
            'Mantant retard Max': this.criteria.mantantRetardMax ? this.criteria.mantantRetardMax : environment.emptyForExport ,
            'Nombre mois retard Min': this.criteria.nombreMoisRetardMin ? this.criteria.nombreMoisRetardMin : environment.emptyForExport ,
            'Nombre mois retard Max': this.criteria.nombreMoisRetardMax ? this.criteria.nombreMoisRetardMax : environment.emptyForExport ,
            'Montant total Min': this.criteria.montantTotalMin ? this.criteria.montantTotalMin : environment.emptyForExport ,
            'Montant total Max': this.criteria.montantTotalMax ? this.criteria.montantTotalMax : environment.emptyForExport ,
            'Date presentation Min': this.criteria.datePresentationFrom ? this.datePipe.transform(this.criteria.datePresentationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date presentation Max': this.criteria.datePresentationTo ? this.datePipe.transform(this.criteria.datePresentationTo , this.dateFormat) : environment.emptyForExport ,
            'Date taxe tnb Min': this.criteria.dateTaxeTnbFrom ? this.datePipe.transform(this.criteria.dateTaxeTnbFrom , this.dateFormat) : environment.emptyForExport ,
            'Date taxe tnb Max': this.criteria.dateTaxeTnbTo ? this.datePipe.transform(this.criteria.dateTaxeTnbTo , this.dateFormat) : environment.emptyForExport ,
        //'Redevable': this.criteria.redevable?.cin ? this.criteria.redevable?.cin : environment.emptyForExport ,
        //'Terrain': this.criteria.terrain?.ref ? this.criteria.terrain?.ref : environment.emptyForExport ,
        //'Taux tax tnb': this.criteria.tauxTaxTnb?.id ? this.criteria.tauxTaxTnb?.id : environment.emptyForExport ,
        }];
      }
}

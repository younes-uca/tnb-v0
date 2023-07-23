import {BaseCriteria} from '/pages/zynerator/criteria/BaseCriteria.model';

import {CategorieTerrainCriteria} from 'CategorieTerrainCriteria.model';




export class TauxTaxTnbCriteria  extends  BaseCriteria {


    public id: number;

     public prixMetreCarre: number;
     public prixMetreCarreMin: number;
     public prixMetreCarreMax: number;
     public prixRetardMetreCarre: number;
     public prixRetardMetreCarreMin: number;
     public prixRetardMetreCarreMax: number;
  public categorieTerrain: CategorieTerrainCriteria ;
  public categorieTerrains: Array<CategorieTerrainCriteria> ;


}

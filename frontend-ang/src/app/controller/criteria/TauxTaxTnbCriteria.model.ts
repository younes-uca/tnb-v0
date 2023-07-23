import {CategorieTerrainCriteria} from './CategorieTerrainCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class TauxTaxTnbCriteria  extends   BaseCriteria  {

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

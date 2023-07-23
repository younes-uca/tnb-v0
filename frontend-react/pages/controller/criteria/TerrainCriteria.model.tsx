import {BaseCriteria} from '/pages/zynerator/criteria/BaseCriteria.model';

import {CategorieTerrainCriteria} from 'CategorieTerrainCriteria.model';
import {RedevableCriteria} from 'RedevableCriteria.model';




export class TerrainCriteria  extends  BaseCriteria {


    public id: number;

    public ref: string;
    public refLike: string;
  public categorieTerrain: CategorieTerrainCriteria ;
  public categorieTerrains: Array<CategorieTerrainCriteria> ;
  public redevable: RedevableCriteria ;
  public redevables: Array<RedevableCriteria> ;


}

import {BaseCriteria} from '/pages/zynerator/criteria/BaseCriteria.model';

import {TerrainCriteria} from 'TerrainCriteria.model';
import {RedevableCriteria} from 'RedevableCriteria.model';
import {TauxTaxTnbCriteria} from 'TauxTaxTnbCriteria.model';




export class TaxTnbCriteria  extends  BaseCriteria {


    public id: number;

     public annee: number;
     public anneeMin: number;
     public anneeMax: number;
     public montantBase: number;
     public montantBaseMin: number;
     public montantBaseMax: number;
     public mantantRetard: number;
     public mantantRetardMin: number;
     public mantantRetardMax: number;
     public nombreMoisRetard: number;
     public nombreMoisRetardMin: number;
     public nombreMoisRetardMax: number;
     public montantTotal: number;
     public montantTotalMin: number;
     public montantTotalMax: number;
    public datePresentation: Date;
    public datePresentationFrom: Date;
    public datePresentationTo: Date;
    public dateTaxeTnb: Date;
    public dateTaxeTnbFrom: Date;
    public dateTaxeTnbTo: Date;
  public redevable: RedevableCriteria ;
  public redevables: Array<RedevableCriteria> ;
  public terrain: TerrainCriteria ;
  public terrains: Array<TerrainCriteria> ;
  public tauxTaxTnb: TauxTaxTnbCriteria ;
  public tauxTaxTnbs: Array<TauxTaxTnbCriteria> ;


}

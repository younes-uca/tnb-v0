import {TerrainDto} from './Terrain.model';
import {RedevableDto} from './Redevable.model';
import {TauxTaxTnbDto} from './TauxTaxTnb.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class TaxTnbDto  extends BaseDto{

    public id: number;
   public annee: number;
    public montantBase: number;
    public mantantRetard: number;
    public nombreMoisRetard: number;
    public montantTotal: number;
   public datePresentation: Date;
   public dateTaxeTnb: Date;
    public anneeMax: string ;
    public anneeMin: string ;
    public montantBaseMax: string ;
    public montantBaseMin: string ;
    public mantantRetardMax: string ;
    public mantantRetardMin: string ;
    public nombreMoisRetardMax: string ;
    public nombreMoisRetardMin: string ;
    public montantTotalMax: string ;
    public montantTotalMin: string ;
    public datePresentationMax: string ;
    public datePresentationMin: string ;
    public dateTaxeTnbMax: string ;
    public dateTaxeTnbMin: string ;
    public redevable: RedevableDto ;
    public terrain: TerrainDto ;
    public tauxTaxTnb: TauxTaxTnbDto ;

}

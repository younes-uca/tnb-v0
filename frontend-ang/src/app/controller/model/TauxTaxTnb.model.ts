import {CategorieTerrainDto} from './CategorieTerrain.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class TauxTaxTnbDto  extends BaseDto{

    public id: number;
    public prixMetreCarre: number;
    public prixRetardMetreCarre: number;
    public prixMetreCarreMax: string ;
    public prixMetreCarreMin: string ;
    public prixRetardMetreCarreMax: string ;
    public prixRetardMetreCarreMin: string ;
    public categorieTerrain: CategorieTerrainDto ;

}

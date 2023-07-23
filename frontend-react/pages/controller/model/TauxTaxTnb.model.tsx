import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {CategorieTerrainDto} from 'pages/controller/model/CategorieTerrain.model';

export class TauxTaxTnbDto extends BaseDto{


    public id: number;
    public prixMetreCarre: number;
    public prixRetardMetreCarre: number;
    public prixMetreCarreMax: string ;
    public prixMetreCarreMin: string ;
    public prixRetardMetreCarreMax: string ;
    public prixRetardMetreCarreMin: string ;
    public categorieTerrain: CategorieTerrainDto ;

}

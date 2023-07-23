import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {CategorieTerrainDto} from 'pages/controller/model/CategorieTerrain.model';
import {RedevableDto} from 'pages/controller/model/Redevable.model';

export class TerrainDto extends BaseDto{


    public id: number;
    public ref: string;
    public categorieTerrain: CategorieTerrainDto ;
    public redevable: RedevableDto ;

}

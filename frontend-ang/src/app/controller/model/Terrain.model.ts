import {CategorieTerrainDto} from './CategorieTerrain.model';
import {RedevableDto} from './Redevable.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class TerrainDto  extends BaseDto{

    public id: number;
    public ref: string;
    public categorieTerrain: CategorieTerrainDto ;
    public redevable: RedevableDto ;

}

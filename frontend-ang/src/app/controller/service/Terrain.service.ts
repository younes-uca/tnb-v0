import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {TerrainDto} from '../model/Terrain.model';
import {TerrainCriteria} from '../criteria/TerrainCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {CategorieTerrainDto} from '../model/CategorieTerrain.model';
import {RedevableDto} from '../model/Redevable.model';

@Injectable({
  providedIn: 'root'
})
export class TerrainService extends AbstractService<TerrainDto, TerrainCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/terrain/');
    }

    public constrcutDto(): TerrainDto {
        return new TerrainDto();
    }

    public constrcutCriteria(): TerrainCriteria {
        return new TerrainCriteria();
    }
}

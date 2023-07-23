import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CategorieTerrainDto} from '../model/CategorieTerrain.model';
import {CategorieTerrainCriteria} from '../criteria/CategorieTerrainCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class CategorieTerrainService extends AbstractService<CategorieTerrainDto, CategorieTerrainCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/categorieTerrain/');
    }

    public constrcutDto(): CategorieTerrainDto {
        return new CategorieTerrainDto();
    }

    public constrcutCriteria(): CategorieTerrainCriteria {
        return new CategorieTerrainCriteria();
    }
}

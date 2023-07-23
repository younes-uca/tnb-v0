import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {TauxTaxTnbDto} from '../model/TauxTaxTnb.model';
import {TauxTaxTnbCriteria} from '../criteria/TauxTaxTnbCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {CategorieTerrainDto} from '../model/CategorieTerrain.model';

@Injectable({
  providedIn: 'root'
})
export class TauxTaxTnbService extends AbstractService<TauxTaxTnbDto, TauxTaxTnbCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/tauxTaxTnb/');
    }

    public constrcutDto(): TauxTaxTnbDto {
        return new TauxTaxTnbDto();
    }

    public constrcutCriteria(): TauxTaxTnbCriteria {
        return new TauxTaxTnbCriteria();
    }
}

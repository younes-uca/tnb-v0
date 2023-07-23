import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {TaxTnbDto} from '../model/TaxTnb.model';
import {TaxTnbCriteria} from '../criteria/TaxTnbCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {TerrainDto} from '../model/Terrain.model';
import {RedevableDto} from '../model/Redevable.model';
import {TauxTaxTnbDto} from '../model/TauxTaxTnb.model';

@Injectable({
  providedIn: 'root'
})
export class TaxTnbService extends AbstractService<TaxTnbDto, TaxTnbCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/taxTnb/');
    }

    public constrcutDto(): TaxTnbDto {
        return new TaxTnbDto();
    }

    public constrcutCriteria(): TaxTnbCriteria {
        return new TaxTnbCriteria();
    }
}

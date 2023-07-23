import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {RedevableDto} from '../model/Redevable.model';
import {RedevableCriteria} from '../criteria/RedevableCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class RedevableService extends AbstractService<RedevableDto, RedevableCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/redevable/');
    }

    public constrcutDto(): RedevableDto {
        return new RedevableDto();
    }

    public constrcutCriteria(): RedevableCriteria {
        return new RedevableCriteria();
    }
}

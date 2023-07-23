import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {RedevableService} from 'src/app/controller/service/Redevable.service';
import {RedevableDto} from 'src/app/controller/model/Redevable.model';
import {RedevableCriteria} from 'src/app/controller/criteria/RedevableCriteria.model';

@Component({
  selector: 'app-redevable-view-admin',
  templateUrl: './redevable-view-admin.component.html'
})
export class RedevableViewAdminComponent extends AbstractViewController<RedevableDto, RedevableCriteria, RedevableService> implements OnInit {


    constructor(private redevableService: RedevableService){
        super(redevableService);
    }

    ngOnInit(): void {
    }




}

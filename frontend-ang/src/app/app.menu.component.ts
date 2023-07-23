import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';

import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { RoleService } from 'src/app/zynerator/security/Role.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  animations: [
    trigger('inline', [
      state(
        'hidden',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      transition(
        'visibleAnimated => hiddenAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'hiddenAnimated => visibleAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelsuperadmin:any[];
  modelanonymous: any[];
    modeladmin : any[];
  constructor(public app: AppComponent,
   public appMain: AppMainComponent,
   private roleService: RoleService,
   private authService:AuthService,
  private router: Router) {}

  ngOnInit() {


    this.modeladmin =
      [
              {
                label: 'Taxe Tnb',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste tax tnb',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/tnb/tax-tnb/list']
                    },
                ]
              },
              {
                label: 'Gestion collaborateur',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste redevable',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/collaborateur/redevable/list']
                    },
                    {
                      label: 'Liste terrain',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/collaborateur/terrain/list']
                    },
                ]
              },
              {
                label: 'Configuration',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste taux tax tnb',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/commun/taux-tax-tnb/list']
                    },
                    {
                      label: 'Liste categorie terrain',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/commun/categorie-terrain/list']
                    },
                ]
              },
    ]
        if (this.authService.authenticated) {
      if (this.authService.authenticatedUser.roles) {

        this.authService.authenticatedUser.roles.forEach(role => {
          const roleName: string = this.getRole(role);
          this.roleService._role.next(roleName.toUpperCase());
          eval('this.model = this.model' + this.getRole(role));
        })
      }

    }
  }
  getRole(text){
  const [role, ...rest] = text.split('_');
  return rest.join('').toLowerCase();
}
  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }
}

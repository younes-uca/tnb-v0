import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from "primeng/fileupload";

import { TauxTaxTnbCreateAdminComponent } from './taux-tax-tnb-admin/create-admin/taux-tax-tnb-create-admin.component';
import { TauxTaxTnbEditAdminComponent } from './taux-tax-tnb-admin/edit-admin/taux-tax-tnb-edit-admin.component';
import { TauxTaxTnbViewAdminComponent } from './taux-tax-tnb-admin/view-admin/taux-tax-tnb-view-admin.component';
import { TauxTaxTnbListAdminComponent } from './taux-tax-tnb-admin/list-admin/taux-tax-tnb-list-admin.component';
import { CategorieTerrainCreateAdminComponent } from './categorie-terrain-admin/create-admin/categorie-terrain-create-admin.component';
import { CategorieTerrainEditAdminComponent } from './categorie-terrain-admin/edit-admin/categorie-terrain-edit-admin.component';
import { CategorieTerrainViewAdminComponent } from './categorie-terrain-admin/view-admin/categorie-terrain-view-admin.component';
import { CategorieTerrainListAdminComponent } from './categorie-terrain-admin/list-admin/categorie-terrain-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    TauxTaxTnbCreateAdminComponent,
    TauxTaxTnbListAdminComponent,
    TauxTaxTnbViewAdminComponent,
    TauxTaxTnbEditAdminComponent,
    CategorieTerrainCreateAdminComponent,
    CategorieTerrainListAdminComponent,
    CategorieTerrainViewAdminComponent,
    CategorieTerrainEditAdminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
  ],
  exports: [
  TauxTaxTnbCreateAdminComponent,
  TauxTaxTnbListAdminComponent,
  TauxTaxTnbViewAdminComponent,
  TauxTaxTnbEditAdminComponent,
  CategorieTerrainCreateAdminComponent,
  CategorieTerrainListAdminComponent,
  CategorieTerrainViewAdminComponent,
  CategorieTerrainEditAdminComponent,
  ],
  entryComponents: [],
})
export class CommunAdminModule { }
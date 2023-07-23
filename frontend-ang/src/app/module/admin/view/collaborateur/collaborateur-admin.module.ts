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

import { RedevableCreateAdminComponent } from './redevable-admin/create-admin/redevable-create-admin.component';
import { RedevableEditAdminComponent } from './redevable-admin/edit-admin/redevable-edit-admin.component';
import { RedevableViewAdminComponent } from './redevable-admin/view-admin/redevable-view-admin.component';
import { RedevableListAdminComponent } from './redevable-admin/list-admin/redevable-list-admin.component';
import { TerrainCreateAdminComponent } from './terrain-admin/create-admin/terrain-create-admin.component';
import { TerrainEditAdminComponent } from './terrain-admin/edit-admin/terrain-edit-admin.component';
import { TerrainViewAdminComponent } from './terrain-admin/view-admin/terrain-view-admin.component';
import { TerrainListAdminComponent } from './terrain-admin/list-admin/terrain-list-admin.component';

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

    RedevableCreateAdminComponent,
    RedevableListAdminComponent,
    RedevableViewAdminComponent,
    RedevableEditAdminComponent,
    TerrainCreateAdminComponent,
    TerrainListAdminComponent,
    TerrainViewAdminComponent,
    TerrainEditAdminComponent,
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
  RedevableCreateAdminComponent,
  RedevableListAdminComponent,
  RedevableViewAdminComponent,
  RedevableEditAdminComponent,
  TerrainCreateAdminComponent,
  TerrainListAdminComponent,
  TerrainViewAdminComponent,
  TerrainEditAdminComponent,
  ],
  entryComponents: [],
})
export class CollaborateurAdminModule { }
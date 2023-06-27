import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './modules/forms/forms.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DragdropComponent } from './modules/dragdrop/dragdrop.component';
import { TableComponent } from './modules/table/table.component';
import { TreeComponent } from './modules/tree/tree.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'dragdrop',
    component: DragdropComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'tree',
    component: TreeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
     {
        path: 'news',
        loadChildren: () => import('../news/news.module').then( m => m.NewsPageModule)
      },
      {
        path: 'tasks',
        loadChildren: () => import('../tasks/tasks.module').then( m => m.TasksPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

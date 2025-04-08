import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'home',
  //   loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  // },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then((m) => m.TabsPage),
    children:[
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
      {      
        path: 'home',
        loadComponent: () => import('./pages/tabs/home/home.page').then( m => m.HomePage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/tabs/profile/profile.page').then( m => m.ProfilePage)
      }, 
      {
        path: 'account',
        loadComponent: () => import('./pages/tab/account/account.page').then( m => m.AccountPage)
      },     
    ],
  },  
]

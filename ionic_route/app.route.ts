const routes: Routes = [
    {
      path: 'home',
      loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
    },
    {
      path: 'profile',
      loadComponent: () => import('./pages/profile/profile.page').then(m => m.ProfilePage)
    }
  ];
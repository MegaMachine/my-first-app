import { ServerResolverService } from './servers/server/server-resolver.service';
import { CanDeactivatedGuard } from './servers/edit-server/can-deactivated-guard.service';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { AuthGuard } from './auth-guard.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent },
  ]},
  { path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
    { path: ':id', component: ServerComponent, resolve: { server: ServerResolverService } },
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivatedGuard] },
  ]},
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!!!'} },
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, { useHash: true }) //localhost:4200/#/
    RouterModule.forRoot(appRoutes, { useHash: false }) //localhost:4200/ ---> false is default param
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}

import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'users', canActivateChild:[AuthGuard], component: UsersComponent, children: [
    { path : ':name', component: UserComponent},
  ]},
  { path : 'servers', component: ServersComponent},
  { path : 'not-found', component: PageNotFoundComponent},
  { path : '**', redirectTo: '/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    ServersComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

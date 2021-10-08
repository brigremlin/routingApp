import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ServersComponent } from "./servers/servers.component";
import { UsersComponent } from "./users/users.component";
import { NgModule } from "@angular/core";
import { UserListComponent } from "./users/user-list/user-list.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'users', component: UsersComponent, children: [
    { path: 'userList', component: UserListComponent},
  ]},
  { path: 'servers', component: ServersComponent},
  { path: '**', component: NotFoundComponent},
];
@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

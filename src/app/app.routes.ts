import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SomComponent } from './signals/som/som.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { USER_ROUTES } from './user/user.routes';
import { SecondComponent } from './components/second/second.component';
import { NF404Component } from './components/nf404/nf404.component';
import { CvComponent } from './components/cv/cv.component';
import { TestFormComponent } from './formExample/test-form/test-form.component';
// /user
export const routes: Routes = [
  {path: 'cv', children:[
    // route elle va commence par cv
    {path: '', component: CvComponent}
  ]},
  {path: '', component: FirstComponent},
  {path: 'som', component: SomComponent},
  {path: 'form', component: TestFormComponent},
  ...USER_ROUTES,
  {path: 'bonjour/:test', component: SecondComponent},
  // {path: 'bonjour/:test/aymen/:autreVar', component: UserInfoComponent},
  {path: '**', component: NF404Component},
];

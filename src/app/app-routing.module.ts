import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmrutiComponent } from './smruti/smruti.component';
import { SampleComponent } from './view/sample/sample.component';
import { JujuMamaComponent } from './juju-mama/juju-mama.component';
import { JujuSmrutiComponent } from './juju-smruti/juju-smruti.component';

const routes: Routes = [
  { path: 'smruti', component: SmrutiComponent,
        children:[
          { path:'juju', component: JujuSmrutiComponent},
          { path: 'mama', component: JujuMamaComponent}
        ]
  },
  { path: 'view', component: SampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

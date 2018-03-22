 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxGalleryModule } from 'ngx-gallery';


import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { SwaticsdnbhdComponent } from './components/swaticsdnbhd/swaticsdnbhd.component';
import { SyarikatuniversalComponent } from './components/syarikatuniversal/syarikatuniversal.component';
import { SwaticintegratedmoversComponent } from './components/swaticintegratedmovers/swaticintegratedmovers.component';
import { SwaticwarehouseComponent } from './components/swaticwarehouse/swaticwarehouse.component';
import { SwaticresourcesComponent } from './components/swaticresources/swaticresources.component';
import { AssociatesComponent } from './components/associates/associates.component';
import { SubsidiariesComponent } from './components/subsidiaries/subsidiaries.component';
import { CareerComponent } from './components/career/career.component';


const appRoutes: Routes = [
  {path:'', component:HomeComponent},
	{path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'certificates', component:CertificatesComponent},
  {path:'swaticsdnbhd', component:SwaticsdnbhdComponent},
  {path:'syarikatuniversal', component:SyarikatuniversalComponent},
  {path:'swaticsintegratedmovers', component:SwaticintegratedmoversComponent},
  {path:'swaticwarehouse', component:SwaticwarehouseComponent},
  {path:'swaticresources', component:SwaticresourcesComponent},
  {path:'associates', component:AssociatesComponent},
  {path:'subsidiaries', component:SubsidiariesComponent},
  {path:'career', component:CareerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    GalleryComponent,
    CertificatesComponent,
    SwaticsdnbhdComponent,
    SyarikatuniversalComponent,
    SwaticintegratedmoversComponent,
    SwaticwarehouseComponent,
    SwaticresourcesComponent,
    AssociatesComponent,
    SubsidiariesComponent,
    CareerComponent
  ],
  imports: [
    NgxGalleryModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

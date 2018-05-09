import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeCmpComponent } from './home-cmp/home-cmp.component';
import { ProduitCmpComponent } from './produit-cmp/produit-cmp.component';
import { ClientsCmpComponent } from './clients-cmp/clients-cmp.component';
import { ContactUsCmpComponent } from './contact-us-cmp/contact-us-cmp.component';
import { ClientService } from '../service/client.service';
import { AcceuilCmpComponent } from './acceuil-cmp/acceuil-cmp.component';
import { HttpModule } from '@angular/http';
import { ContactUsService } from '../service/contactUsService';

const  appRoutes : Routes = [
  {path : 'Home', component:HomeCmpComponent},
  {path : 'Produits', component:ProduitCmpComponent},
  {path : 'Clients', component:ClientsCmpComponent},
  {path : 'ContactUs', component:ContactUsCmpComponent },
  {path : 'acceuil', component:AcceuilCmpComponent },
  {path : '', redirectTo: '/acceuil', pathMatch: 'full'}
 
];


@NgModule({
  declarations: [
    AppComponent,
    HomeCmpComponent,
    ProduitCmpComponent,
    ClientsCmpComponent,
    ContactUsCmpComponent,
    AcceuilCmpComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [
    ClientService,
    ContactUsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

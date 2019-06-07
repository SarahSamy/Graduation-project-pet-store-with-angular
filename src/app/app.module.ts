import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PetItemComponent } from './features/pets/pet-item/pet-item.component';
import { PetListingComponent } from './features/pets/pet-listing/pet-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PetItemComponent,
    PetListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

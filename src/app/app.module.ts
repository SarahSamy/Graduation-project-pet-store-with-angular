import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PetItemComponent } from './features/pets/pet-item/pet-item.component';
import { PetListingComponent } from './features/pets/pet-listing/pet-listing.component';
import { LoginComponent } from './features/login/login.component';
import { LowerHeaderComponent } from './core/layout/header/lower-header/lower-header.component';
import { UpperHeaderComponent } from './core/layout/header/upper-header/upper-header.component';
import { FullHeaderComponent } from './core/layout/header/full-header/full-header.component';
import { RegisterComponent } from './features/register/register.component';
import { HomeComponent } from './features/home/home.component';
import { PetService } from './_services/pet.service';
import { FiltringListComponent } from './shared/filtring-list/filtring-list.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { MainSliderComponent } from './shared/main-slider/main-slider.component';
import { FourItemsSliderComponent } from './shared/four-items-slider/four-items-slider.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PetItemComponent,
    PetListingComponent,
    LoginComponent,
    LowerHeaderComponent,
    UpperHeaderComponent,
    FullHeaderComponent,
    RegisterComponent,
    HomeComponent,
    FiltringListComponent,
    PaginationComponent,
    DropdownComponent,
    MainSliderComponent,
    FourItemsSliderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([{
      path: 'Login', component: LoginComponent
    },
      {
        path: 'Register', component: RegisterComponent
      },
      {
        path: 'Home', component: HomeComponent
      },
      { path: 'pet-listing', component: PetListingComponent },
        // ,{
        //   path:'**',component:NotFoundErrorComponent
        // }
      ]),
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

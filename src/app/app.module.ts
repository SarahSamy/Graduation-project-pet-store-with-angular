import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './features/login/login.component';
import { LowerHeaderComponent } from './core/layout/header/lower-header/lower-header.component';
import { UpperHeaderComponent } from './core/layout/header/upper-header/upper-header.component';
import { FullHeaderComponent } from './core/layout/header/full-header/full-header.component';
import { RegisterComponent } from './features/register/register.component';
import { HomeComponent } from './features/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    LowerHeaderComponent,
    UpperHeaderComponent,
    FullHeaderComponent,
    RegisterComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([{
      path:'Login',component:LoginComponent
          },
          {
            path:'Register',component:RegisterComponent
                },
                {
                  path:'Home',component:HomeComponent
                      }
        // ,{
        //   path:'**',component:NotFoundErrorComponent
        // }
      ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

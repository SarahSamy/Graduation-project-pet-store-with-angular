import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { NgxPaginationModule } from "ngx-pagination";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CommentService } from "./_services/Comment.service";
import { PostsService } from "./_services/Posts.service";
import { TagService } from "./_services/Tag.service";
import { CategoryService } from "./_services/category.service";
import { PetService } from "./_services/pet.service";
import { ReplyService } from "./_services/reply.service";
import { TypeService } from "./_services/type.service";
import { AnimalTypesComponent } from "./features/animal-types/animal-types.component";
import { HomeComponent } from "./features/home/home.component";
import { LoginComponent } from "./features/login/login.component";
import { RegisterComponent } from "./features/register/register.component";
import { CardWithCoverComponent } from "./shared/card-with-cover/card-with-cover.component";
import { DropdownComponent } from "./shared/dropdown/dropdown.component";
import { FiltringListComponent } from "./shared/filtring-list/filtring-list.component";
import { FourItemsSliderComponent } from "./shared/four-items-slider/four-items-slider.component";
import { MainSliderComponent } from "./shared/main-slider/main-slider.component";
import { PaginationComponent } from "./shared/pagination/pagination.component";
import { FooterComponent } from "./core/layout/footer/footer.component";
import { NotFoundComponent } from "./core/layout/not-found/not-found.component";
import { AddPostComponent } from "./features/blog/add-post/add-post.component";
import { CommentItemComponent } from "./features/blog/comment-item/comment-item.component";
import { PostDetailsComponent } from "./features/blog/post-details/post-details.component";
import { PostItemComponent } from "./features/blog/post-item/post-item.component";
import { PostListingComponent } from "./features/blog/post-listing/post-listing.component";
import { ReplyItemComponent } from "./features/blog/reply-item/reply-item.component";
import { SidebarComponent } from "./features/blog/sidebar/sidebar.component";
import { AddAnimalFormComponent } from "./features/pets/add-animal-form/add-animal-form.component";
import { PetItemComponent } from "./features/pets/pet-item/pet-item.component";
import { PetListingComponent } from "./features/pets/pet-listing/pet-listing.component";
import { PetProfileComponent } from "./features/pets/pet-profile/pet-profile.component";
import { EditProfileComponent } from "./features/user/edit-profile/edit-profile.component";
import { ManagePetsComponent } from "./features/user/manage-pets/manage-pets.component";
import { FullHeaderComponent } from "./core/layout/header/full-header/full-header.component";
import { LowerHeaderComponent } from "./core/layout/header/lower-header/lower-header.component";
import { UpperHeaderComponent } from "./core/layout/header/upper-header/upper-header.component";
import { CategoryItemComponent } from "./features/blog/categories/category-item/category-item.component";
import { CategoryListingComponent } from "./features/blog/categories/category-listing/category-listing.component";
import { TagItemComponent } from "./features/blog/tags/tag-item/tag-item.component";
import { TagListingComponent } from "./features/blog/tags/tag-listing/tag-listing.component";

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
    AnimalTypesComponent,
    AddAnimalFormComponent,
    PetProfileComponent,
    DropdownComponent,
    MainSliderComponent,
    FourItemsSliderComponent,
    PetProfileComponent,
    CategoryItemComponent,
    CategoryListingComponent,
    TagListingComponent,
    TagItemComponent,
    PostItemComponent,
    PostListingComponent,
    SidebarComponent,
    PostDetailsComponent,
    AddPostComponent,
    NotFoundComponent,
    ManagePetsComponent,
    CommentItemComponent,
    EditProfileComponent,
    CardWithCoverComponent,
    ReplyItemComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: "Login",
        component: LoginComponent
      },
      {
        path: "Register",
        component: RegisterComponent
      },
      {
        path: "Home",
        component: HomeComponent
      },
      {
        path: "",
        redirectTo: "/Home",
        pathMatch: "full"
      },
      { path: "pet-listing", component: PetListingComponent },
      { path: "Animal-Types", component: AnimalTypesComponent },
      { path: "Add-Animal", component: AddAnimalFormComponent },
      { path: "Edit-Animal/:id", component: AddAnimalFormComponent },
      { path: "pet-profile", component: PetProfileComponent },
      { path: "pet-profile/:id", component: PetProfileComponent },
      { path: "manage-pets", component: ManagePetsComponent },
      { path: "edit-profile", component: EditProfileComponent },
      { path: "Blog", component: PostListingComponent },
      { path: "Blog/Post-details/:id", component: PostDetailsComponent },
      { path: "Blog/add-post", component: AddPostComponent },

      {
        path: "**",
        component: NotFoundComponent
      }
    ])
  ],
  providers: [PetService, TypeService, CategoryService, PostsService, TagService, CommentService, ReplyService],
  bootstrap: [AppComponent]
})
export class AppModule {}

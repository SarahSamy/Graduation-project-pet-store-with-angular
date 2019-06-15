import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public href: string;
  title = 'Graduation-project-pet-store-with-angular';
   constructor(private router: Router) {}
  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
}

}

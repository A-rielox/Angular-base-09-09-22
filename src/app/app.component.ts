import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   // template: `<h1>Hello world</h1>`,
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent {
   name = 'ariel';
   imgURL =
      'https://depor.com/resizer/GFvRG5IRro9eX-HdYdD33t97Jgg=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/RGKQY6IKM5GQ3N55KHVWVKSQI4.png';

   currentDate = new Date();
   cost = 2000;
   temperature = 25.3;
   pizza = {
      toppings: ['pepperoni', 'bacon'],
      size: 'large',
   };

   blueClass = false;
   fontSize = 16;

   getName() {
      return this.name;
   }

   chamgeImage(e: KeyboardEvent) {
      this.imgURL = (e.target as HTMLInputElement).value;
   }

   logImg(e: string) {
      console.log(e);
   }
}

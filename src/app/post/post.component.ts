import {
   Component,
   Input,
   EventEmitter,
   Output,
   OnInit,
   OnChanges,
   DoCheck,
   SimpleChanges,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy,
} from '@angular/core';

@Component({
   selector: 'app-post',
   templateUrl: './post.component.html',
   styleUrls: ['./post.component.css'],
})
export class PostComponent
   implements
      OnInit,
      OnChanges,
      DoCheck,
      AfterContentInit,
      AfterContentChecked,
      AfterViewInit,
      AfterViewChecked,
      OnDestroy
{
   @Input('img') postImg = '';
   @Output() imgSelected = new EventEmitter<string>();

   constructor() {
      console.log('constructor() called', this.postImg);
   }

   // tb corre al inicializarce el componente
   // esta corre despues dq haya ocurrido el binding de la data, xlo q si se necesita q ya haya pasado la data => esta es la manera y no el ctor
   ngOnInit() {
      console.log('ngOnInit() called', this.postImg);
   }

   ngOnChanges() {
      console.log('ngOnChanges() called');
   }

   // corre cuando detecta cambios
   ngDoCheck() {
      console.log('ngDoCheck() called');
   }

   // las de content corren antes q las de view
   ngAfterContentInit() {
      console.log('ngAfterContentInit() called');
   }
   ngAfterContentChecked() {
      console.log('ngAfterContentChecked() called');
   }
   ngAfterViewInit() {
      console.log('ngAfterViewInit() called');
   }
   ngAfterViewChecked() {
      console.log('ngAfterViewChecked() called');
   }

   // corre al removerse el componente
   ngOnDestroy() {
      console.log('ngOnDestroy() called');
   }
}

// constructor() called
// ngOnInit() called https://depor.com/resizer/GFvRG5IRro9eX-HdYdD33t97Jgg=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/RGKQY6IKM5GQ3N55KHVWVKSQI4.png

// para mandar info desde un child hacia un parent ( hacia arriba ☝ ) --> @Output
// para mandar info desde un parent hacia un child ( hacia abajo 👇 ) --> @Input

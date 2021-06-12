import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

    @Input() defaultColor : string = 'transparent';
    @Input('appBetterHighlight') highlightedColor : string = 'blue';

    @HostBinding('style.backgroundColor') backgroundColor : string = 'transparent';

    constructor(private elementRef: ElementRef,private renderer:Renderer2){
    }

    ngOnInit(){
       //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
       this.backgroundColor=this.defaultColor;
    }

    @HostListener('mouseenter') mouseover(eventData : Event){
      //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
      //this.backgroundColor = 'blue';
      this.backgroundColor = this.highlightedColor;
    }

    @HostListener('mouseleave') mouseleave(eventData : Event){
      //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
      //this.backgroundColor = 'transparent';
      this.backgroundColor = this.defaultColor;
    }
}

import { Directive, OnChanges, Input, ElementRef, Renderer2, Output, EventEmitter, HostListener } from "@angular/core";

@Directive({
  selector: '[outclick]'
})
export class OutContainerClickDirective {

  @Input() isFirst: boolean;
  @Output() onOutClick = new EventEmitter<boolean>();

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('document:click', ['$event'])
  onClick(btn: Event) {
    console.log(btn);
    console.log(event.target);

    if (!this.isFirst) {
      if (!this.el.nativeElement.contains(event.target)) {
        this.onOutClick.emit(true);
      }
    }else
    this.onOutClick.emit(false);
  }


}
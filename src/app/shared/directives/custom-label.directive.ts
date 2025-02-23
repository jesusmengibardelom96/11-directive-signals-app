import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit{

  private htmlElement?: ElementRef<HTMLElement>

  private _color: string = 'red'

  private _errors?: ValidationErrors | null

  @Input() set errors ( value: ValidationErrors | null | undefined ) {
    this._errors = value
    console.log(this._errors)
    this.setErrorMessage()
  }

  @Input() set color (value: string) {
    this._color = value
    this.setStyle()
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el
  }

  ngOnInit(): void {
    this.setStyle()
  }

  setStyle(): void {
    if( !this.htmlElement ) return

    this.htmlElement!.nativeElement.style.color = this._color
  }

  setErrorMessage(): void {
    if(!this.htmlElement) return

    if(!this._errors) {
      this.htmlElement.nativeElement.innerText = 'No hay errores'
      return
    }
  }

}

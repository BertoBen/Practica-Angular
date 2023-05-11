import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../catalogo.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() producto?: Producto;
  @Input() textoBoton: string = "Producto";

  @Output() click: EventEmitter<number> = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  public pulsarBoton():void{
    this.click.emit(this.producto?.getId());
  }

}

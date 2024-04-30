import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat } from '../models/cat.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-kitten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.css',
})
export class ListKittenComponent {
  @Input() catsToAdoptList!: Cat[];

  @Output() sendAdoptedCatToParent: EventEmitter<Cat> = new EventEmitter();

  adoptMe(index: number) {
    this.sendAdoptedCatToParent.emit(this.catsToAdoptList[index]);
  }
}

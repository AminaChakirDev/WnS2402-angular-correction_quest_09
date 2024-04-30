import { Component, EventEmitter, Output } from '@angular/core';
import { Cat } from '../models/cat.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.css',
})
export class CreateKittenComponent {
  newCat: Cat = {
    name: '',
    race: '',
    birthday: null,
    image: 'http://placekitten.com/200/200',
  };

  @Output() sendNewCatToParent: EventEmitter<Cat> = new EventEmitter();

  onSubmit() {
    this.sendNewCatToParent.emit(this.newCat);
    this.newCat = {
      name: '',
      race: '',
      birthday: null,
      image: 'http://placekitten.com/200/200',
    };
  }
}

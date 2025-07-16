import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './serch-input.component.html',
  styleUrl: './serch-input.component.css'
})
export class SerchInputComponent {

  placeholder = input('Buscar');
  value = output<string>();
  debounceTime = input(300);

  inputValue = signal<string>('');

  debounceEffect = effect((onCleanUp) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.value.emit( value );
    }, this.debounceTime());

    onCleanUp(() => {
      clearTimeout(timeout)
    })
  });

}

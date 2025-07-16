import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './serch-input.component.html',
  styleUrl: './serch-input.component.css'
})
export class SerchInputComponent {

  placeholder = input('Buscar');
  value = output<string>();
  debounceTime = input(1000);
  initialValue = input<string>('');

  inputValue = linkedSignal<string>( () => this.initialValue() ?? '');

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

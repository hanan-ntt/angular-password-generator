import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  password = '';
  useLetters = false;
  useSymbols = false;
  useNumbers = false;
  onPasswordLengthChange(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
  onUseLettersChange() {
    this.useLetters = !this.useLetters;
  }
  onUseSymbolsChange() {
    this.useSymbols = !this.useSymbols;
  }
  onUseNumbersChange() {
    this.useNumbers = !this.useNumbers;
  }
  onButtonClick() {
    const numbers = '123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!"£$%^&*()';
    let validChars = '';
    if (this.useLetters) {
      validChars += letters;
    }
    if (this.useNumbers) {
      validChars += numbers;
    }
    if (this.useSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}

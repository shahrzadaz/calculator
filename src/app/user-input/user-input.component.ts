import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UserInput} from "../investment-results/UserInput.model";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment: number =0;
  annualInvestment =0;
  expectedReturn =0;
  duration = 0;
  @Output() entry = new EventEmitter<UserInput>

  submitEntry() {
    this.entry.emit({
      initialInvestment:this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration
    })
  }
}

import {Component, Input} from '@angular/core';
import {UserInput} from "./UserInput.model";
import {CalculationResults} from "../calculationResults.model";
import {DecimalPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    NgForOf,
    DecimalPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() calculationResults!:CalculationResults[]


  show() {
    console.log('Received calculationResults:', this.calculationResults);
  }
}

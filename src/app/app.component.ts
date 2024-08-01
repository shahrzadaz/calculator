import { Component } from '@angular/core';
import {UserInputComponent} from "./user-input/user-input.component";
import {UserInput} from "./investment-results/UserInput.model";
import {CalculateService} from "./calculate.service";
import {CalculationResults} from "./calculationResults.model";
import {InvestmentResultsComponent} from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    UserInputComponent,
    InvestmentResultsComponent
  ]
})
export class AppComponent {
  constructor(private calculationService:CalculateService) {
  }
  calculationResults!: CalculationResults[]
  getUserInput(userInput:UserInput) {
   this.calculationResults= this.calculationService.calculateInvestmentResults(userInput.duration,userInput.initialInvestment,userInput.annualInvestment,userInput.expectedReturn)
   console.log(userInput)
  }
  get results(){
    return this.calculationResults

  }

}
// it returns object object

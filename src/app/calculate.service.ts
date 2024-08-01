import {Injectable} from "@angular/core";
import {UserInput} from "./investment-results/UserInput.model";

@Injectable({ providedIn: 'root' })
export class CalculateService {


  calculateInvestmentResults(duration: number,initialInvestment: number,annualInvestment:number,expectedReturn:number) {
    const annualData = [];
    let investmentValue = initialInvestment;
     console.log(investmentValue)
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    return annualData;
  }
}

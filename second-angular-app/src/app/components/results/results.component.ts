import { Component, Signal, input, output, computed } from '@angular/core';
import { InvestmentType } from '../../app.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  isActive = input<boolean>()
  data = input<InvestmentType>()
  results = computed(() => {
    const currentData = this.data()
    if (!currentData) return []
    return this.calculateInvestmentResults(currentData)
  })


  calculateInvestmentResults(data: InvestmentType) {
    const annualData = []

    let investmentValue = data.initialInvestment

    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualInvestment;
      const totalInterest =
        investmentValue - data.annualInvestment * year - data.initialInvestment;
        annualData.push({
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: investmentValue,
          annualInvestment: data.annualInvestment,
          totalInterest: totalInterest,
          totalAmmountInvested: data.initialInvestment + data.annualInvestment * year
        });
    }

    return annualData;
  }

}

// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it

//function calculateInvestmentResults() {
  //const annualData = [];
  //let investmentValue = initialInvestment;

  //for (let i = 0; i < duration; i++) {
    //const year = i + 1;
    //const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    //investmentValue += interestEarnedInYear + annualInvestment;
    //const totalInterest =
      //investmentValue - annualInvestment * year - initialInvestment;
    //annualData.push({
      //year: year,
      //interest: interestEarnedInYear,
      //valueEndOfYear: investmentValue,
      //annualInvestment: annualInvestment,
      //totalInterest: totalInterest,
      //totalAmountInvested: initialInvestment + annualInvestment * year,
    //});
  //}

  //return annualData;
//}
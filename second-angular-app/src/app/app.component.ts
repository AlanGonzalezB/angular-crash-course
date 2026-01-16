import { Component, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "./layouts/header/header.component";
import { ResultsComponent } from "./components/results/results.component";
import { InvestmentType } from "./app.interface"

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, ResultsComponent, FormsModule],
})
export class AppComponent {
  investment: InvestmentType = ({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 10
  })

  investmentToSend = signal<InvestmentType>(
  this.investment
)


  isDataSet: boolean = false


  onClickCalculate() {

    this.investmentToSend.set({...this.investment})
    console.log(this.investment);
    this.isDataSet = true
  }
  
}

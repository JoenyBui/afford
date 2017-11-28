/**
 * Created by joeny on 8/18/17.
 */

class HomeCalculator {
  constructor() {

    this.mortgageRate = 4.0;
    this.closingCost = 5000;
    this.propertyTaxRate = 1.5;
    this.hoaMonthly = 150;
    this.insuranceAnnual = 1000;
    this.maintenanceAnnual = 1500;

    this.savingsAvailable = 25000;
    this.giftMoney = 0;
    this.monthlyRent = 1000;
    this.monthlyDisposableIncome = 500;
    this.mortgageLength = 30;
    this.percentDown = 10;
    this.housePriceK = 100;

    this.chartData = {
      labels: ['Item 1', 'Item 2', 'Item 3'],
      datasets: [{
        data: [10, 20, 30]
      }]
    };

    this.pieData = {
      datasets: [{
        data: [this.savings, this.gifts, this.rent, this.income]
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'Savings',
        'Gifts',
        'Rent',
        'Income'
      ]
    };

    this.barData = {
      datasets: [{
        data:[this.savings, this.gifts, this.rent, this.income]
      }],

      labels: [
        'Savings',
        'Gifts',
        'Rent',
        'Income'
      ]
    };

    this.pieOptions = {

    };

    this.barOptions = {
      scales: {
        xAxes: [{
          gridLines: {
            offsetGridLines: true
          }
        }]
      }
    };

    // Calculate new values.
    this.calculate = this.calculate.bind(this);
    // this.onChangeRecalculate.bind(this);
  }

  calculate() {
    this.housePrice = 1000*this.housePriceK;
    this.maxUpfront = this.savingsAvailable + this.giftMoney;
    this.maxMonthly = this.monthlyRent + this.monthlyDisposableIncome;

    this.insuranceMonthly = this.insuranceAnnual/100;
    this.downpayment = this.percentDown*this.housePrice/100;
    this.mortgagePayment = (this.housePrice-this.downpayment)*(1-1/(1+this.mortgageRate/100/12))/(1-1/Math.pow((1+this.mortgageRate/100/12),this.mortgageRate*12+1));
    this.taxMonthly = this.housePrice*this.propertyTaxRate/100/12;
    this.maintenaneMonthly = this.maintenaneAnnual/12;
    this.totalMonthly = this.mortgagePayment + this.insuranceMonthly + this.hoaMonthly + this.maintenaneMonthly + this.taxMonthly;
    this.totalUpfront = this.downpayment + this.closingCost;

  }

  onChangeRefresh() {
    console.log("Call recalculate.");

    this.calculate();
  }

  loadLocal() {
    var item = localStorage.getItem('homeCalculator');

  }

  saveLocal() {
    localStorage.setItem({
      homeCalculator: JSON.stringify(this)
    })
  }

}

export default HomeCalculator;
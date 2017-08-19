/**
 * Created by joeny on 8/18/17.
 */

class HomeCalculator {
  constructor() {

    this.mortgageRate = null;
    this.closing = 10;
    this.propertyTaxRate = null;
    this.hoaMonthly = 10;
    this.insuranceAnnual = 10;
    this.maintenaneAnnual = 10;

    this.savings = 10;
    this.gifts = 10;
    this.rent = 10;
    this.income = 10;
    this.mortgageLength = 10;
    this.percentDown = 10;
    this.housePrice = 1000*10;

    this.maxUpfront = this.savings + this.gifts;
    this.maxMonthly = this.rent + this.income;

    this.insuranceMonthly = this.insuranceAnnual/100;
    this.downpayment = this.percentDown*this.housePrice/100;
    this.mortgagePayment = (this.housePrice-this.downpayment)*(1-1/(1+this.mortgageRate/100/12))/(1-1/Math.pow((1+this.mortgageRate/100/12),this.mortgageRate*12+1));
    this.taxMonthly = this.housePrice*this.propertyTaxRate/100/12;
    this.maintenaneMonthly = this.maintenaneAnnual/12;
    this.totalMonthly = this.mortgagePayment + this.insuranceMonthly + this.hoaMonthly + this.maintenaneMonthly + this.taxMonthly;
    this.totalUpfront = this.downpayment + this.closing;

  }
}

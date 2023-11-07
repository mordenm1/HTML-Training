function calculate() {
    var trip = {
        travel: {
            fuelEcon: Number(document.getElementById('fuel-econ').value),
            fuelPrice: Number(document.getElementById('fuel-price').value),
            milesTo: Number(document.getElementById('miles-to').value),
            milesFrom: Number(document.getElementById('miles-from').value),
            extraMilage: Number(document.getElementById('extra-miles').value),
            totalMiles: function () {
                return Number((this.milesTo + this.milesFrom + this.extraMilage).toFixed(2));
            },
            totalFuelCost: function () {
                return Number(((this.totalMiles() / this.fuelEcon) * this.fuelPrice).toFixed(2));
            },
        },

        foodAndStuff: {
            days: Number(document.getElementById('lunch-days').value),
            dinnerDays: Number(document.getElementById('dinner-days').value),
            people: Number(document.getElementById('people').value),
            breakfastPerDay: 0,
            lunchPerDay: Number(document.getElementById('lunch-cost').value),
            dinnerPerDay: Number(document.getElementById('dinner-cost').value),
            funThingsTotal: Number(document.getElementById('fun-things').value),
            totalCost: function () {
                return Number(((this.lunchPerDay * this.days * this.people) + (this.dinnerPerDay * this.dinnerDays * this.people) + (this.breakfastPerDay * this.days * this.people) + this.funThingsTotal).toFixed(2));
            },

        },

        lodging: {
            nightsMidway: Number(document.getElementById('nights-mid').value),
            //midwayStayAt: 'Kennewick, Washington',
            nightsDest: Number(document.getElementById('nights-dest').value),
            //destStayAt: 'Manzanita, Oregon',
            midwayStayPerNight: Number(document.getElementById('mid-per-night').value),
            destStayPerNight: Number(document.getElementById('dest-per-night').value),
            prepaid: Number(document.getElementById('prepaid').value),
            totalCost: function () {
                return Number(((this.midwayStayPerNight * this.nightsMidway) + (this.destStayPerNight * this.nightsDest)).toFixed(2));
            },
            costMinusPrepaid: function () {
                return Number((this.totalCost() - this.prepaid).toFixed(2));
            },
        },

        totalCost: function () {
            return Number((this.travel.totalFuelCost() + this.foodAndStuff.totalCost() + this.lodging.totalCost()).toFixed(2));
        },

        totalCostMinusPrep: function () {
            return Number((this.totalCost() - this.lodging.prepaid).toFixed(2));
        },
    }


    document.getElementById('fuel-cost').innerHTML = '$' + trip.travel.totalFuelCost();
    document.getElementById('meals-plus').innerHTML = '$' + trip.foodAndStuff.totalCost();
    document.getElementById('lodging-cost').innerHTML = '$' + trip.lodging.totalCost();
    document.getElementById('lodging-minus-pre').innerHTML = '$' + trip.lodging.costMinusPrepaid();
    document.getElementById('trip-total-minus-pre').innerHTML = '$' + trip.totalCostMinusPrep();
    document.getElementById('trip-total').innerHTML = '$' + trip.totalCost();
    
}
//   console.log('Fuel Cost: ' + trip.travel.totalFuelCost());

//   console.log('Meals and things: ' + trip.foodAndStuff.totalCost());

//   console.log('Lodging Cost: ' + trip.lodging.totalCost());

//   console.log('Lodging Cost minus prepaid ammount: ' + trip.lodging.costMinusPrepaid())

//   console.log('Total trip with prepaid lodging: ' + trip.totalCostNoLodging());

//   console.log('Total trip cost: ' + trip.totalCost());
class car {
    constructor (make, model, year, type, mpg, mileageMiles, tankSizeGallons, topSpeedMPH, vin) {
        this.make = make ;
        this.model = model;
        this.year = year;
        this.type = type;
        this.lastService = new Date();
        this.vin = vin;
        // this.licenseNumber = licenseNumber;
        this.mileageMiles =mileageMiles;
        this.topSpeedMPH=topSpeedMPH;
        this.mpg = mpg;
        this.tankSizeGallons = tankSizeGallons;
    
    }

    travel(miles) {
        if (miles > this.tankSizeGallons * this.mpg) {
            console.log("You cannot make this trip on a single tank of gas!");

            return; // the method ends early
        }

        this.mileageMiles = this.mileageMiles + miles;

        console.log(`${this.make} ${this.model} goes on a ${miles} miles trip`);
    }
}

let car1 = new car("Honda", "Accord", 2010,"Sedan", 35, 110000, 14, 120, "9tfu2is8ywhu8");


//Output
console.log(car1);

//Input
car1.travel(1000000);

//Output
console.log(car1);
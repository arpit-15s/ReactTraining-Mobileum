function Person(name, age) {
    this.name = name;
    this.age = age;
    this.listOfVehical = [];
}

function teachDriving(Person, vehical) {
    if(Person.age < 18){
        console.log(Person.name + " you need to wait for " + (18 - Person.age) + " years to drive your car");
        return;
    }

    console.log(Person.name + " you are now licensed to drive" + vehical);
    Person.listOfVehical.push(vehical);
    Person.drive = function (vehical) {
        for(let i of this.listOfVehical){
            if(vehical === i){
                console.log(this.name + " drives "+ vehical);
                return;
            }
        }
        console.log(this.name + " is not licensed to drive" + vehical);
    }
}

var Prabhat = new Person("Prabhat", 40);
var Shivanshi = new Person("Shivanshi", 15);

teachDriving(Prabhat, "car");
teachDriving(Shivanshi, "Bike");
Prabhat.drive("truck");
Prabhat.drive("car");
Shivanshi.drive("Bike");

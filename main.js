class Human {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Apartment {
    residents = [];

    addResident(resident) {
        this.residents.push(resident);
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this. maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if(this.apartments.length > this.maxApartments) {
            console.log("Maximum number of apartments exceeded.");
        } else {
            this.apartments.push(apartment);
        }
    }
}

const monica = new Human("Monica", "female");
const chandler = new Human("Chandler", "male");
const ross = new Human("Ross", "male");

const monicaApartment = new Apartment();
const chandlerApartment = new Apartment();
const rossApartment = new Apartment();

monicaApartment.addResident(monica);
chandlerApartment.addResident(chandler);
rossApartment.addResident(ross);

const firstHouse = new House(4);

firstHouse.addApartment(monicaApartment);
firstHouse.addApartment(chandlerApartment);
firstHouse.addApartment(rossApartment);

console.log(firstHouse);
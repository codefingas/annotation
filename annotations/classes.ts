class Vehicle {

    constructor(public color: string){

    }

    protected honk(): void {
        console.log('Beep Beep');
    };
};


const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {

    constructor(public wheels: number, color: string){
        super(color);
    }


    private drive(): void {
        console.log('Vroom');
    }

    startdrivingProcess(){
        this.drive();
        this.honk();
    }
}

const corrolla = new Car(4, 'red');

// corrolla.startdrivingProcess();

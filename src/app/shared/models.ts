export class Journey {
    flights: Flight[];
    orgin: string;
    destination: string;
    price: number

    constructor(flights: Flight[], origin: string, destination: string, price: number) {
        this.flights = flights;
        this.orgin = origin;
        this.destination = destination;
        this.price = price;

    }
}

export class Flight {
    transport: Transport;
    orgin: string;
    destinatin: string;
    price: number

    constructor(transport: Transport, origin: string, destination: string, price: number) {
        this.transport = transport;
        this.orgin = origin;
        this.destinatin = destination;
        this.price = price
    }
}

export class Transport {
    flightCarrier: string;
    flightNumber: string

    constructor(flightCarrier: string, flightNumber: string) {
        this.flightCarrier = flightCarrier;
        this.flightNumber = flightNumber;

    }
}

export const currencies = [
    {
        "currency": "USD",
        "value": 1,
        "symbol": '$'
    },
    {
        "currency": "EUR",
        "value": 0.93,
        "symbol": '€'
    },
    {
        "currency": "GBP",
        "value": 0.82,
        "symbol": '£'
    }
];
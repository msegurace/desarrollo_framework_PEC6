import { Food } from "./food.model";

interface WineInterface {
    id: number,
    name: string;
    imageUrl: string;
    price: number;
    isOnSale: boolean;
    quantityInCart: number;
    foodPairing: Food[];
}

export class Wine {
    public id: number;
    public name: string;
    public imageUrl: string;
    public price: number;
    public isOnSale: boolean;
    public quantityInCart: number;
    public foodPairing: Food[];

    constructor ( { id, name, imageUrl, price, isOnSale, quantityInCart, foodPairing}: WineInterface = {
        id: 0,
        name: '', 
        imageUrl: '',
        price: 0,
        isOnSale: false,
        quantityInCart: 0,
        foodPairing: []
    }) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.isOnSale = isOnSale;
        this.quantityInCart = quantityInCart;
        this.foodPairing = foodPairing
    }


}
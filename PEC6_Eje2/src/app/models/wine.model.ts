import { Food } from "./food.model";

interface WineInterface {
    name: string;
    imageUrl: string;
    price: number;
    isOnSale: boolean;
    quantityInCart: number;
    foodPairing: Food[];
}

export class Wine {
    public id?: string;
    public name: string;
    public imageUrl: string;
    public price: number;
    public isOnSale: boolean;
    public quantityInCart: number;
    public foodPairing: Food[];

    constructor ( { name, imageUrl, price, isOnSale, quantityInCart, foodPairing}: WineInterface = {
        name: '', 
        imageUrl: '',
        price: 0,
        isOnSale: false,
        quantityInCart: 0,
        foodPairing: []
    }) {
        this.id = undefined;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.isOnSale = isOnSale;
        this.quantityInCart = quantityInCart;
        this.foodPairing = foodPairing
    }


}
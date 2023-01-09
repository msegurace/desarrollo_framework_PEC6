interface FoodInterface {
    name: string;
    kcal: number;
    vegan: boolean;
    gluten: boolean;
}

export class Food {
    public name: string;
    public kcal: number;
    public vegan: boolean;
    public gluten: boolean;

    constructor( {name, kcal, vegan, gluten }: FoodInterface = {
        name: '',
        kcal: 0,
        vegan: false,
        gluten: false

    }) {
        this.name = name;
        this.kcal = kcal;
        this.vegan = vegan;
        this.gluten = gluten;
    }
}
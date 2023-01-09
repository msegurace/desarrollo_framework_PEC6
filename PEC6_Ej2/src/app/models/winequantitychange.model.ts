import { Wine } from "./wine.model"

export interface WineQuantityChange {
  wine: Wine;
  changeInQuantity: number;
}

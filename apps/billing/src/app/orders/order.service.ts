import { Injectable, EventEmitter } from '@angular/core';
import { Order } from '@businx/data-models';
import { CartService } from '../shopping/cart/cart.service';
import { FirestoreDataService } from '@businx/firestore-data-service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public order = new EventEmitter<Order>();

  constructor(
    private readonly cartService: CartService,
    private readonly db: FirestoreDataService
  ) { }

  /**
   * Allow you to push an existing order to Cart to be updated.
   * @param order An object of type Order wich contains the Order data.
   */
  pushToCart(order: Order): void {
    const { id, buyer, shopItems, ship, discounts } = order;

    this.cartService.setBuyer(buyer);
    this.cartService.setShip(ship);
    this.cartService.setDiscount(discounts);

    shopItems.forEach((cartItem) => {
      this.cartService.setCartItem(cartItem);
    });
  }
}

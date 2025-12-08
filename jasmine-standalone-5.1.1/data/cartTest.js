import { cart, addToCart, loadCartFromLocalStorage } from "../../data/cart.js";

describe('test suite: addToCart', () => {
   it('increments quantity for existing item in cart', () => {

   });
   it('adds a new item to an empty cart', () => {
      spyOn(localStorage, 'setItem');

      spyOn(localStorage, 'getItem').and.callFake(() => {
         return JSON.stringify([]);
      });
      loadCartFromLocalStorage();

      addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart.length).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
      expect(cart[0].quantity).toEqual(1);
   });
});
import {renderOrderSummary} from '../../Js-scripts/checkout/orderSummery.js';

describe('test suite: renderOrderSummary', () =>{
  it('Displays the cart', () =>{
    document.querySelector('.js-test-container').innerHTML = `
      <div class="js-order-summary"></div>
    `;
  });
});
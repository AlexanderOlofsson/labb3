import { expect } from "chai";
import { calculateTotalPrice } from "../utils/priceCalculator";

describe("Price Calculator", () => {
  it("Please buddy, calculate the total price of customizations", () => {
    const customizations = [
      { id: 1, sofaId: 1, customColor: "#ff0000", price: 100 },
      { id: 2, sofaId: 1, customColor: "#00ff00", price: 150 },
    ];
    const totalPrice = calculateTotalPrice(customizations);
    expect(totalPrice).to.equal(250);
  });

  it("Please, please, return 0 if there are no customizations", () => {
    const customizations: any[] = [];
    const totalPrice = calculateTotalPrice(customizations);
    expect(totalPrice).to.equal(0);
  });
});

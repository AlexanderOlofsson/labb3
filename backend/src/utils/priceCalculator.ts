// OLD NOT BEING USED

export function calculateTotalPrice(customizations: { price: number }[]): number {
  return customizations.reduce((total, customization) => total + customization.price, 0);
}

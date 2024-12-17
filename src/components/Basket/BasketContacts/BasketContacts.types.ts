export interface IBasketContacts {
  onOrderConfirm: (orderNumber: string) => void;
  isClearCartPending: boolean;
}

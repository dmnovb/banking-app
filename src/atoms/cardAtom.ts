import { atom } from 'jotai';

export const currentCard = atom<any>({
  id: 1,
  creditCardNumber: '1234 5678 9012 3456',
  currentBalance: 45500.75,
  expiryDate: '12/25',
  cvv: '123',
});

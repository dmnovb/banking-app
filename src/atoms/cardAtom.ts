import { atom } from 'jotai';

interface Card {
  id: number;
  creditCardNumber: string;
  currentBalance: number;
  expiryDate: string;
  cvv: string;
}

export const currentCard = atom<Card>({
  id: 1,
  creditCardNumber: '1234 5678 9012 3456',
  currentBalance: 45500.75,
  expiryDate: '12/25',
  cvv: '123',
});

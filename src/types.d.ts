export type DockItemType = {
  name: string;
  icon: ReactNode<SVGElement>;
};

enum TransactionCategory {
  UTILITY = 'utility',
  ENTERTAINMENT = 'entertainment',
  FOOD = 'food',
}

export type TransactionType = {
  id: number;
  merchant: string;
  amount: number;
  icon: ReactNode<SVGElement>;
  category: TransactionCategory;
  timeOfTransaction: Date | number;
};

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import data from './data';

const Transactions = () => {
  return (
    <div className="mt-4 rounded p-4 flex-col bg-secondary-background flex-1 text-primary">
      {data.map((transaction) => (
        <div
          key={transaction.id}
          className="p-4 gap-2 rounded my-2 items-center bg-tertiary-background justify-between flex"
        >
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={transaction.icon} />
            </Avatar>
            <div className="flex flex-col gap-1">
              <span>{transaction.merchant}</span>
              <span className="text-secondary">{transaction.category}</span>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-right">${transaction.amount}</span>
              <span className="text-secondary">
                {new Date(transaction.timeOfTransaction).toDateString()}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import data from './data';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

const Transactions = () => {
  return (
    <div className="px-4">
      <div className="mt-4 rounded p-4 flex-col bg-secondary-background text-primary overflow-auto max-h-52">
        {data.map((transaction) => (
          <div
            key={transaction.id}
            className="p-4 gap-2 rounded my-2 items-center bg-tertiary-background justify-between flex"
          >
            <div className="flex items-center gap-4 font-bold">
              <Avatar>
                <AvatarImage src={transaction.icon} />
              </Avatar>
              <div className="flex flex-col gap-1">
                <span>{transaction.merchant}</span>
                <Badge className={'text-secondary w-fit capitalize'}>
                  {transaction.category}
                </Badge>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-right font-bold">
                  {transaction.type === 'incoming' ? '+ ' : '- '}$
                  {transaction.amount}
                </span>
                <span className="text-secondary">
                  {new Date(transaction.timeOfTransaction).toDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;

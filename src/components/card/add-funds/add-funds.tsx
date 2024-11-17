import { memo, ReactNode, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { useAtom, useSetAtom } from 'jotai';
import { currentCard } from '@/atoms/cardAtom';
import { toast } from 'sonner';

interface Props {
  className?: string;
  open?: boolean;
  setOpen?: (arg: boolean) => void;
  children: ReactNode;
  title?: string;
  description?: string;
  triggerClassName?: string;
}

const AddFunds = ({ children, open, setOpen }: Props) => {
  const asdf: any = useAtom(currentCard);
  const card = asdf[0];

  console.log(open);
  const setCard = useSetAtom(currentCard);

  const [amount, setAmount] = useState<number>(400);
  const [currency, setCurrency] = useState<string>('USD');
  const [animateKey, setAnimateKey] = useState(false);
  // const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setAmount(value ? parseInt(value, 10) : 0);
    setAnimateKey((prev) => !prev);
  };

  const handleBlur = () => {
    if (amount < 0) setAmount(0);
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };

  const handleAddFunds = async (e: React.MouseEvent) => {
    setLoading(true);
    await new Promise<void>((resolve) => setTimeout(resolve, 2000));

    setCard({ ...card, currentBalance: card.currentBalance + amount });
    setOpen && setOpen(false);
    setLoading(false);
    return toast('Transaction successful.', {
      description: `$${amount} has been deposited successfully!`,
    });
  };

  return (
    <Drawer open={open}>
      <DrawerTrigger>{children}</DrawerTrigger>

      <DrawerContent className="bg-secondary-background h-full">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-primary text-center">
              ADD FUNDS
            </DrawerTitle>
            <DrawerDescription className="text-center">
              Select your preferred currency and input the amount.
            </DrawerDescription>
          </DrawerHeader>

          <div className="flex justify-center mt-6">
            <select
              value={currency}
              onChange={handleCurrencyChange}
              className="text-white bg-gray-700 rounded px-4 py-2"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
            </select>
          </div>

          <div className="flex items-center justify-center mt-8 space-x-4">
            <motion.input
              type="text"
              value={amount}
              onChange={handleInputChange}
              onBlur={handleBlur}
              animate={{ scale: animateKey ? 1.1 : 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              initial={{ scale: 1, opacity: 1 }}
              className="text-6xl bg-transparent text-center text-primary focus:outline-none"
            />
          </div>

          <p className="text-center mt-2 text-white text-sm">{currency}</p>

          <DrawerFooter className="mt-10 font-bold">
            <Button
              className="w-full text-primary py-2 rounded font-bold"
              onClick={handleAddFunds}
              disabled={loading}
            >
              PAY
            </Button>
            <DrawerClose
              onClick={() => setOpen && setOpen(false)}
              className="w-full bg-white text-blac py-1 mt-1 rounded hover:bg-white/80"
            >
              CANCEL
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default memo(AddFunds);

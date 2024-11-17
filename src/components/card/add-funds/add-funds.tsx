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

interface Props {
  className?: string;
  children: ReactNode;
  title?: string;
  description?: string;
  triggerClassName?: string;
}

const AddFunds = ({ children }: Props) => {
  const [amount, setAmount] = useState<number>(400);
  const [currency, setCurrency] = useState<string>('USD');
  const [animateKey, setAnimateKey] = useState(false);

  const focusRef = useRef<any | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setAmount(value ? parseInt(value, 10) : 0);
    setAnimateKey((prev) => !prev);
  };

  const handleFocus = (e: any) => {
    focusRef.current = e.current.target.select();
  };

  const handleBlur = () => {
    if (amount < 0) setAmount(0);
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };

  return (
    <Drawer>
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
            <Button
              onClick={() => setAmount((prev) => Math.max(prev - 10, 0))}
              disabled={amount <= 0}
              className="text-2xl bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              -
            </Button>

            <motion.input
              type="text"
              value={amount}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              animate={{ scale: animateKey ? 1.1 : 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              initial={{ scale: 1, opacity: 1 }}
              className="text-6xl bg-transparent text-center text-primary focus:outline-none"
            />

            <Button
              onClick={() => setAmount((prev) => prev + 10)}
              className="text-2xl bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              +
            </Button>
          </div>

          <p className="text-center mt-2 text-white text-sm">
            {currency} / DAY
          </p>

          <DrawerFooter className="mt-10">
            <Button className="w-full text-primary py-2 rounded">PAY</Button>
            <DrawerClose className="w-full bg-white text-blac py-1 mt-1 rounded hover:bg-white/80">
              CANCEL
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default memo(AddFunds);

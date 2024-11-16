import cards from './cards';
import MC from '@/assets/mc';
import { motion } from 'motion/react';
import { Plus, CreditCard, Lock } from 'lucide-react';
import {
  DrawerTrigger,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';
import { ccn } from '@/lib/utils';

const Card = () => {
  const handle_click = () => {};

  return (
    <Cards>
      <div className="flex flex-1 p-4 w-full">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            onClick={handle_click}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-xl shadow-xl flex-1 w-[467px]"
          >
            <span className="flex text-primary text-left text-lg">
              Total balance
            </span>

            <div className="flex justify-between items-center mb-4">
              <div className="text-primary text-4xl font-semibold">
                $
                {card.currentBalance.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
            </div>

            <div className="flex justify-between items-center py-4 text-md">
              <span className="text-primary">Exp {card.expiryDate}</span>
            </div>

            {/* <MC /> */}

            <span className="text-primary text-left flex py-4 text-lg">
              {ccn(card.creditCardNumber)}
            </span>

            <div className="flex space-x-6 justify-between">
              {/* Removed transition for a more mobile-friendly approach */}
              <motion.div
                drag
                className="bg-white bg-opacity-20 p-4 rounded-full flex items-center justify-center w-14 h-14 shadow-lg"
                aria-label="Add Funds"
              >
                <Plus className="text-xl" />
              </motion.div>

              <motion.div
                drag
                className="bg-white bg-opacity-20 p-4 rounded-full flex items-center justify-center w-14 h-14 shadow-lg"
                aria-label="View Transactions"
              >
                <CreditCard className="text-xl" />
              </motion.div>

              <motion.div
                drag
                className="bg-white bg-opacity-20 p-4 rounded-full flex items-center justify-center w-14 h-14 shadow-lg"
                aria-label="Block Card"
              >
                <Lock className="text-xl" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </Cards>
  );
};

export default Card;

interface Props {
  children: ReactNode;
}

const Cards = ({ children }: Props) => (
  <Drawer>
    <DrawerTrigger>{children}</DrawerTrigger>
    <DrawerContent className="bg-secondary-background">
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle className="text-primary">Select your card</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>

        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
);

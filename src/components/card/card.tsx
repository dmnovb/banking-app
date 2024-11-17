import cards from './data/cards';
import MC from '@/assets/mc';
import { motion } from 'motion/react';
import { ccn } from '@/lib/utils';
import { Drawer } from '@/components';
import controls from './data/controls';
import { useAtom } from 'jotai';
import { balance as balanceAtom } from '@/atoms/balanceAtom';
import { DialogTrigger } from '@radix-ui/react-dialog';
import AddFunds from './add-funds/add-funds';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { currentCard } from '@/atoms/cardAtom';

const Card = () => {
  const cardAtom = useAtom(currentCard);

  const card = cardAtom[0];

  const [isNumberVisible, setIsNumberVisible] = useState(false);

  const handleNumberVisibility = (e: React.MouseEvent): void => {
    e.stopPropagation();
    setIsNumberVisible(!isNumberVisible);
  };

  return (
    <div>
      <Drawer>
        <div className="flex flex-1 p-4 w-full">
          {/* {cards.map((card) => ( */}
          <motion.div
            key={card.id}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-xl shadow-xl flex-1 flex flex-col w-full .btn"
          >
            <span className="flex text-primary text-left text-lg font-bold">
              Total balance
            </span>

            <div className="flex justify-between items-center mb-4">
              <div className="text-primary text-4xl font-extrabold">
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

            <span className="text-primary text-left flex items-center gap-2 py-4 text-lg">
              {ccn(card.creditCardNumber)}
              {isNumberVisible ? (
                <Eye size={18} onClick={handleNumberVisibility} />
              ) : (
                <EyeOff size={18} onClick={handleNumberVisibility} />
              )}
            </span>
          </motion.div>
          {/* // ))} */}
        </div>
      </Drawer>

      <Controls />
    </div>
  );
};

export default Card;

const Controls = () => {
  return (
    <div className="flex items-center content-center justify-between px-4">
      {controls.map((control) => (
        <div
          key={control.id}
          className="bg-secondary-background p-4 flex justify-center items-center shadow-lg rounded"
          aria-label={control.label}
        >
          <AddFunds>
            <div className="flex flex-col w-full items-center gap-2 text-[#00a1ff]">
              <control.icon />
              <p className="text-sm font-extrabold">{control.label}</p>
            </div>
          </AddFunds>
        </div>
      ))}
    </div>
  );
};

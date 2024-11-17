import {
  Drawer as DrawerPrimivite,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerHeader,
  DrawerClose,
  DrawerFooter,
  DrawerDescription,
} from '@/components/ui/drawer';

import { Button } from '@/components/ui/button';
import { ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
}
const Drawer = ({ children, title, description }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <DrawerPrimivite open={open}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="bg-secondary-background">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-primary">
              {title || 'Title'}
            </DrawerTitle>
            <DrawerDescription>
              {description || 'description'}
            </DrawerDescription>
          </DrawerHeader>

          <DrawerFooter>
            <Button>test</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </DrawerPrimivite>
  );
};

export default Drawer;

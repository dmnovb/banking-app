import { Dock, DockIcon } from '@/components/ui/dock';
import items from './items';

const DockMenu = () => {
  return (
    <Dock className="absolute bottom-0 right-0 left-3 mb-7" direction="middle">
      {items.map((item) => (
        <DockIcon key={item.name}>
          {<item.icon className="text-primary" />}
        </DockIcon>
      ))}
    </Dock>
  );
};

export default DockMenu;

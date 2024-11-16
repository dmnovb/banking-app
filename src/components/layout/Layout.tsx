import { BottomMenu, Card, Dock, Transactions } from '@/components';

const Layout = () => {
  return (
    <div className="">
      <Card />
      <div className="flex justify-center px-4">
        <Transactions />
      </div>
      {/* <BottomMenu /> */}
      {/* <Dock /> */}
    </div>
  );
};

export default Layout;

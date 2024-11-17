import { BottomMenu, Card, Dock, Transactions } from '@/components';
import { Fragment } from 'react/jsx-runtime';
import { BentoDemo } from '../bento';

const Layout = () => {
  return (
    <Fragment>
      <Card />
      <Transactions />
      <BottomMenu />

      {/* <BentoDemo /> */}
    </Fragment>
  );
};

export default Layout;

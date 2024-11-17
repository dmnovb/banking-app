import { Provider } from 'jotai';
import { store } from '@/store';
import { Layout } from '@/components/layout';
import ThemeProvider from '@/providers/theme-provider';
import { useEffect, useState } from 'react';
import Page from './components/non-mobile-page/page';
import { Toaster } from 'sonner';

const App = () => {
  const [device, setDevice] = useState<any>(true);

  useEffect(() => {
    const handleResize = () => {
      setDevice(window.innerWidth < 750);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {device ? <Layout /> : <Page />}
        <Toaster theme="dark" className="border-[#191D24]" />
      </ThemeProvider>
    </Provider>
  );
};

export default App;

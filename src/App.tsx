import { Provider } from 'jotai';
import { store } from '@/store';
import { Layout } from '@/components/layout';
import ThemeProvider from '@/providers/theme-provider';
import { ModeToggle } from './components/mode-toggle/mode-toggle';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout />
        {/* <ModeToggle /> */}
      </ThemeProvider>
    </Provider>
  );
};

export default App;

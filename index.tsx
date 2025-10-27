import { createRoot } from 'react-dom/client';
import { ContextProvider } from './src/features/context';
import App from './src/app';
import './index.scss';

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error("Элемент с id 'root' не найден в DOM");
  }
  const root = createRoot(rootElement);

  root.render(
    <ContextProvider>
      <App />
    </ContextProvider>
  );
} catch (error) {
  console.log(error);
}

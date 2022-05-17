import { createRoot } from 'react-dom/client';

import { AppRoot } from './AppRoot';

const root = createRoot(document.getElementById('root') as HTMLElement);
// Second TS variant
// const root = createRoot(document.getElementById('root')!);

root.render(<AppRoot />);

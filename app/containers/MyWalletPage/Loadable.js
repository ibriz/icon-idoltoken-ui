/**
 *
 * Asynchronously loads the component for MyWalletPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

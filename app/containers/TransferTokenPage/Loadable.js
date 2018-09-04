/**
 *
 * Asynchronously loads the component for TransferTokenPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

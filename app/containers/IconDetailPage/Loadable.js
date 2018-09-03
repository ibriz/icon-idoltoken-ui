/**
 *
 * Asynchronously loads the component for IconDetailPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

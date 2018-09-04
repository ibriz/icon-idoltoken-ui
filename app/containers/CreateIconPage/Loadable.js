/**
 *
 * Asynchronously loads the component for CreateIconPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

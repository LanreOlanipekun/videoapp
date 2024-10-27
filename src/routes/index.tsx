import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import PublicContainer from '../Container/publicContainer';
import publicRoutes from './public';

const Routing = () => {
  return (
    <Suspense fallback={<div>Please wait ...</div>}>
      <Routes>
        <Route path="/" element={<PublicContainer />}>
          {publicRoutes.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={<route.element />}
                key={index}
              />
            );
          })}
        </Route>

        <Route path="*" element={<div>404 Not found</div>} />
      </Routes>
    </Suspense>
  );
};

export default Routing;

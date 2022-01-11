import { BrowserRouter, Routes as Routers, Route, Navigate } from 'react-router-dom';
import { Home } from 'pages';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Routers>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routers>
    </BrowserRouter>
  );
};

import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { HackWebProviders } from './providers/HackWebProviders';
import { Landing } from './pages/Landing';
import { Admin } from './pages/Admin';
import { DishEdit, DishList } from './pages/Admin/components/dish';
import { OrderEdit } from './pages/Admin/components/order/OrderEdit';
import { OrderList } from './pages/Admin/components/order';
import { CategoryEdit, CategoryList } from './pages/Admin/components/category';

export const App = () => {
  return (
    <Router>
      <HackWebProviders>
        <ChakraProvider theme={theme}>
          <Routes>

            <Route index element={<Navigate to="/landing" />} />
            <Route path="/landing" element={<Landing />} />

            <Route path="/admin" element={<Admin />}>
              <Route index element={<Navigate to="dishes" />} />

              <Route path="dishes" element={<DishList />} />
              <Route path="dishes/:id" element={<DishEdit mode="update" label="" />} />
              <Route path="dishes/create" element={<DishEdit mode="add" label="" />} />

              <Route path="orders" element={<OrderList />} />
              <Route path="orders/:id" element={<OrderEdit mode="update" label="" />} />
              <Route path="orders/create" element={<OrderEdit mode="add" label="" />} />

              <Route path="categories" element={<CategoryList />} />
              <Route path="categories/:id" element={<CategoryEdit mode="update" label="" />} />
              <Route path="categories/create" element={<CategoryEdit mode="add" label="" />} />
            </Route>

          </Routes>
        </ChakraProvider>
      </HackWebProviders>
    </Router>
  );
}

// src/router/AppRouter.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importa los módulos correctamente

import Registro from '../page/Registro';// Ajusta la ruta a la ubicación real de tu componente Registro
import Registro2 from '../page/Registro2';
import Home from '../page/home';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registro" element={<Registro />} />
        {/* Ruta principal que muestra el componente Registro */}
        {/* Agrega más rutas aquí según sea necesario */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

// src/router/AppRouter.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importa los módulos correctamente

import Registro from '../page/Registro';// Ajusta la ruta a la ubicación real de tu componente Registro

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registro />} />
        {/* Ruta principal que muestra el componente Registro */}
        {/* Agrega más rutas aquí según sea necesario */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

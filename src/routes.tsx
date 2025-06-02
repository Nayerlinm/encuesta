import { Route, Routes } from "react-router-dom";

import RootLayout from "./app/layout";
import AdminLayout from "./app/(admin)/adminLayout";
import DashboardPage from "./app/(admin)/dashboad/page";
import EncuestaPage from "./app/encuesta/page";
import EncuestaFormPage from "./app/encuesta/[id]/page";
import EncuestaFormLayout from "./app/encuesta/[id]/layout";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<EncuestaPage />} />
        <Route element={<EncuestaFormLayout />}>
          <Route path="/:id" element={<EncuestaFormPage />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<DashboardPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;

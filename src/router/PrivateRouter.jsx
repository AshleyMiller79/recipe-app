import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  return localStorage.getItem("kullanici") === "osman" &&
    localStorage.getItem("kullanicipass") === "1234" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

// kullanici doğru şifre ve isim girdiyse Outlet komponenti sayesinde istenilen sayfaya git, yanlışlık varsa Navigate ile bulunduğun yerde (Login) kal
export default PrivateRouter;

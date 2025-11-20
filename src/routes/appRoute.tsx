import Home from "@/pages/home";
import ProjectDetails from "@/pages/project-details";
import { Routes, Route, Navigate } from "react-router";

export function AppRoutes() {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/project-details/:id" element={<ProjectDetails />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

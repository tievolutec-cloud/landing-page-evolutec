import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CursosPage from './pages/CursosPage'
import CursoDetalhes from './pages/CursoDetalhes'
import Unidades from './pages/Unidades'
import Noticia from './pages/Noticia'
import BlogPage from './pages/BlogPage'
import Sobre from './pages/Sobre'
import TrabalheConosco from './pages/TrabalheConosco'

// Admin
import { AuthProvider } from './admin/AuthContext'
import ProtectedRoute from './admin/ProtectedRoute'
import AdminLayout from './admin/AdminLayout'
import AdminLogin from './admin/pages/AdminLogin'
import AdminDashboard from './admin/pages/AdminDashboard'
import AdminCursos from './admin/pages/AdminCursos'
import AdminCursoForm from './admin/pages/AdminCursoForm'
import AdminBlog from './admin/pages/AdminBlog'
import AdminBlogForm from './admin/pages/AdminBlogForm'
import AdminDepoimentos from './admin/pages/AdminDepoimentos'
import AdminFAQ from './admin/pages/AdminFAQ'
import AdminUnidades from './admin/pages/AdminUnidades'
import AdminEstatisticas from './admin/pages/AdminEstatisticas'
import AdminCurriculos from './admin/pages/AdminCurriculos'
import AdminUsuarios from './admin/pages/AdminUsuarios'

import './App.css'

function SiteLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function AdminRoute({ children, adminOnly = false }) {
  return (
    <ProtectedRoute adminOnly={adminOnly}>
      <AdminLayout>{children}</AdminLayout>
    </ProtectedRoute>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* ── Site público (com Navbar + Footer) ── */}
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<CursosPage />} />
            <Route path="/curso/:slug" element={<CursoDetalhes />} />
            <Route path="/unidades" element={<Unidades />} />
            <Route path="/noticia/:id" element={<Noticia />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          </Route>

          {/* ── Admin (sem Navbar/Footer) ── */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard"    element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/admin/cursos"        element={<AdminRoute><AdminCursos /></AdminRoute>} />
          <Route path="/admin/cursos/novo"   element={<AdminRoute><AdminCursoForm /></AdminRoute>} />
          <Route path="/admin/cursos/:id/editar" element={<AdminRoute><AdminCursoForm /></AdminRoute>} />
          <Route path="/admin/blog"          element={<AdminRoute><AdminBlog /></AdminRoute>} />
          <Route path="/admin/blog/novo"     element={<AdminRoute><AdminBlogForm /></AdminRoute>} />
          <Route path="/admin/blog/:id/editar" element={<AdminRoute><AdminBlogForm /></AdminRoute>} />
          <Route path="/admin/depoimentos"   element={<AdminRoute><AdminDepoimentos /></AdminRoute>} />
          <Route path="/admin/faq"           element={<AdminRoute><AdminFAQ /></AdminRoute>} />
          <Route path="/admin/unidades"      element={<AdminRoute><AdminUnidades /></AdminRoute>} />
          <Route path="/admin/estatisticas"  element={<AdminRoute adminOnly><AdminEstatisticas /></AdminRoute>} />
          <Route path="/admin/curriculos"    element={<AdminRoute adminOnly><AdminCurriculos /></AdminRoute>} />
          <Route path="/admin/usuarios"      element={<AdminRoute adminOnly><AdminUsuarios /></AdminRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App


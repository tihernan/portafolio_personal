import Link from "next/link";

export default function Header() {
  return (

    <div className="navbar-container">
      <nav className="nav-content">
        <div className="nav-links">
          <img src="/images/logo1.png" alt="Mi Logo" className="nav-logo2" width={150} height={150} />
          <Link href="/" className="nav-link">Inicio</Link>
          <Link href="/personal" className="nav-link">Perfil</Link>
          <Link href="/proyects" className="nav-link">Proyectos</Link>
          <a href='mailto: tiffale2013@gmail.com' className="nav-link">Contáctame aquí</a>
        </div>
      </nav>
    </div>
  )
}
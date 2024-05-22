import Link from "next/link";
import Image from 'next/image';


export default function Header() {
  return (

    <div className="navbar-container">
      <nav className="nav-content">
        <div className="nav-links">
          <img src="/images/logo1.png" alt="Mi Logo" className="logo" width={150} height={150} />
          <Link href="/" className="nav-link">Inicio</Link>
          <Link href="/user" className="nav-link">Perfil</Link>
          <Link href="/proyects" className="nav-link">Proyectos</Link>
          <div className="nav-link relative group">
            <a className="nav-link">Call to Action</a>
            <div className="dropdown-content absolute hidden group-hover:block">
              <a className="text-gray-400 hover:text-white transition-colors duration-300" href='mailto: tiffale2013@gnail.com'>Para contratarme haz click aquí</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
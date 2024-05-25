export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="row">
                    <div className="footer-col left-col">
                        <h4>Contacto</h4>
                        <ul className="footer-ul">
                            <a className="text-gray-400">Tiffany Hernández Rodríguez</a>
                            <br></br>
                            <a className="text-gray-400">+506 8319-2575</a>
                            <br></br>
                            <a href="mailto: tiffale2013@gmail.com"
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                            >tiffale2013@gmail.com</a>
                            <br></br>
                            <a href="/personal" className="text-gray-400 hover:text-white transition-colors duration-300">
                            Curriculum</a>
                        </ul>
                    </div>
                    <img src="/images/logo1.png" alt="Mi Logo" className="logo"/>
                    <div className="footer-col">
                        <h4>Redes Sociales</h4>
                        <div className="social-links a">
                            <a href="https://www.facebook.com/tiffany.hernandez.3990/">
                                <img src="/images/face.png" alt="Facebook" />
                            </a>
                            <a href="https://x.com/ti_hernan02">
                                <img src="/images/x.png" alt="X" />
                            </a>
                            <a href="https://www.instagram.com/ti_hernan02/?hl=es-la">
                                <img src="/images/instagram.png" alt="Instagram" />
                            </a>
                            <a href="https://www.linkedin.com/in/tiffany-hern%C3%A1ndez-2896a030a/">
                                <img src="/images/linkedin.png" alt="Linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
import React from 'react';
import './style.css';
import Image from 'next/image';

export default function Personal() {
    return (
        <div className="container">
            {/*Sección superior*/}
            <div className="header">
                <Image src="/images/yo.jpg" alt="Mi Foto" className="foto" width={150} height={150} />
                <h1>TIFFANY ALEXA HERNÁNDEZ RODRÍGUEZ</h1>
            </div>

            <div className="content">
                {/*Sección izquierda*/}
                <div className="sidebar">
                    <h2>Contacto</h2>
                    <p>Teléfono: +506 8319-2575</p>
                    <p>Correo: tiffale2013@gmail.com</p>
                    <br></br>
                    <br></br>
                    <h2>Habilidades</h2>
                    <ul className='h-ul li'>
                        <li>Inglés avanzado</li>
                        <li>Junior en Informática Empresarial</li>
                        <li>Microsoft Office</li>
                        <li>Conocimientos de oficina y etiqueta</li>
                    </ul>
                    <br></br>
                    <br></br>
                    <h2>Aptitudes</h2>
                    <ul className='h-ul li'>
                        <li>Habilidades de liderazgo</li>
                        <li>Trabajo en equipo</li>
                        <li>Adaptabilidad</li>
                    </ul>
                </div>

                {/*Sección derecha*/}
                <div className="main">
                    <h2>Sobre mí</h2>
                    <p>Hola! Mi nombre es Tiffany Hernández, soy una junior en los campos de programación, bases de datos y redes.
                    Actualmente me encuentro cursando el tercer año de Informática Empresarial en la Universidad de Costa Rica
                    </p>
                    <br></br>
                    <br></br>
                    <h2>Historial Académico</h2>
                    <p>• Conclusión de Educación Técnica Media en Ejecutivo para Centros de
                        Servicios, Colegio Técnico Profesional Umberto Melloni Campanini, 2021.</p>
                    <p>• Conclusión de Estudios de la Educación General Básica, Colegio Técnico
                        Profesional Umberto Melloni Campanini, 2018.</p>
                    <p>• Conclusión de Segundo Ciclo de la Educación General Básica, Escuela
                        María Auxiliadora, 2015.</p>
                    <br></br>
                    <br></br>
                    <h2>Historial Profesional</h2>
                    <p>• Horas Estudiante en la Dirección de la Sede del Sur, Universidad de Costa Rica, 2023-2024.</p>
                    <p>• Práctica Profesional Superivisada del Técnico Medio, Vicealcadía de la Municipalidad de Coto Brus, 2021.</p>
                </div>
            </div>
        </div>
    );
}

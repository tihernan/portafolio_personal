"use client";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './style.css';

interface Project {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]); 

    useEffect(() => {
        fetch('https://api.github.com/users/tihernan/repos')
            .then(response => response.json())
            .then((data: Project[]) => setProjects(data))
            .catch(error => console.error('Error fetching GitHub projects:', error));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="App">
            <div className='display'>
                <div className="carousel-container">
                    <Slider {...settings}>
                        {projects.map(project => (
                            <div key={project.id} className="carousel-slide">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                                    Ver Proyecto
                                </a>
                                <br></br>
                                <a href={project.html_url + "/archive/refs/heads/main.zip"} target="_blank" rel="noopener noreferrer">
                                    Descargar proyecto
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Projects;
sssssssssss
/*paco*/ 
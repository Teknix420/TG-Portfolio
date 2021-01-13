import React from 'react';
import ProjectArray from '../components/Projects';

function Projects() {

    return (
        <div className="projects">
            <h3>Projects</h3>
            <div>
                <div className="row row-cols-2 row-cols-sm-1">
                    {
                        ProjectArray.map(project => {
                            return (
                                <div className="col col-xl-6 col-lg-12 col-md-12 col-sm-12" style={{ marginTop: 10 }} key={project.id}>
                                    <div className="card">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={project.img} style={{ display: 'block', margin: 'auto', marginTop: '40px', marginBottom: 'auto', maxHeight: 160 }} alt={project.name} />
                                            </div>
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <h5 className="card-title">{project.name}</h5>
                                                    <p className="card-text">{project.description}</p>
                                                    <a role="button" className="btn btn-info" href={project.github}>Github Page</a>
                                                    <a role="button" className="btn btn-info" href={project.deployed}>Deployed App</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default Projects;
import {React} from 'react'
import ProjectCard from './ProjectCard';
import './Projects.css'

function Projects() {
    



    return (
    <div className='projects' id='projects'>
        <p>Projects</p>
        <div className='projects-container'>
        {projects.map((project) =>
                <ProjectCard
                    key={"1"}
                    description={"description"}
                    codelink={"1codelink"}
                    demolink={"1demolik"}
                />
            )}
        </div>
        </div>
    )
}

export default Projects
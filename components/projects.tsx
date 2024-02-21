'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'


function Projects() {
  
  return (
   
    <section  id="projects"  className='scroll-mt-28 mb-28'>
      <SectionHeading >My Projects</SectionHeading>
      <div>
        {
            projectsData.map((project, index) =>{
                return(
                    <React.Fragment key={index}>
                    <Project {...project}/>
                    </React.Fragment>
                )
            })
        }
      </div>
    </section>
  )
}

export default Projects
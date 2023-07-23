import { useState } from 'react'
import Personal from './Personal'
import EducationForm from './EducationForm'
import ExperienceForm from './ExperienceForm'



export default function CVForm({ 
    cvData,
    handlePersonalChange,
    handleEducationChange,
    handleExperienceChange,
    handleAddEducation,
    handleAddExperience,
    handleDeleteEducation,
    handleDeleteExperience
    }) 
 {
    const educationFormElements = cvData.education.map((item, index) => {
        return (
            <div key={item.id}>
                <h4>Education entry {index+1}</h4>
                <EducationForm {...item} handleEducationChange={handleEducationChange} handleDeleteEducation={handleDeleteEducation} />
            </div>
        )
    })

    const experienceFormElements = cvData.experience.map((item, index) => {
        return (
            <div key={item.id}>
                <h4>Experience entry {index+1}</h4>
                <ExperienceForm {...item} handleExperienceChange={handleExperienceChange} handleDeleteExperience={handleDeleteExperience}/>
            </div>
        )
    })

    return (
        <>
            <h1>CVForm</h1>
            <ul>
                <li>Personal Details</li>
                <li>Personal Statement</li>
                <li>Education</li>
                <li>Experience</li>
            </ul>
            <Personal cvData={cvData} handlePersonalChange={handlePersonalChange}/>

            <h2>Education</h2>
            {educationFormElements}
            <button onClick={handleAddEducation}>Add Education</button>


            <h2>Experience</h2>
            {experienceFormElements}
            <button onClick={handleAddExperience}>Add Experience</button>
        </>
    )
}
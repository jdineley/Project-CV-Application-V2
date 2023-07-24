import { useState } from 'react'
import styled from 'styled-components'
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
                {/* <p>Education entry {index+1}</p> */}
                <EducationForm {...item} handleEducationChange={handleEducationChange} handleDeleteEducation={handleDeleteEducation} />
            </div>
        )
    })

    const experienceFormElements = cvData.experience.map((item, index) => {
        return (
            <div key={item.id}>
                {/* <p>Experience entry {index+1}</p> */}
                <ExperienceForm {...item} handleExperienceChange={handleExperienceChange} handleDeleteExperience={handleDeleteExperience}/>
            </div>
        )
    })

    return (
        <CVFormWrapper>
            {/* <h1>CVForm</h1> */}

            <Personal cvData={cvData} handlePersonalChange={handlePersonalChange}/>

            <h3>Education</h3>
            {educationFormElements}
            <StyledAddButton onClick={handleAddEducation}>Add Education</StyledAddButton>


            <h3>Experience</h3>
            {experienceFormElements}
            <StyledAddButton onClick={handleAddExperience}>Add Experience</StyledAddButton>
        </CVFormWrapper>
    )
}

const CVFormWrapper = styled.div`
    flex: 1;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px
`

const StyledAddButton = styled.button`
    background-color: ${({theme}) => theme.colors.green}
`
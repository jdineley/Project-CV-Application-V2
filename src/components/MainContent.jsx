import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid';
import styled from 'styled-components'

import CVForm from './CV_Form/CVForm'
import CVPreview from './CV_Preview/CVPreview'

import { blankCVData } from "./Utils/blankCVData"
import { exampleCVData } from './Utils/exampleCVData';
console.log(blankCVData)

export default function MainContent() {
    const [ cvData, setCvData ] = useState(() => JSON.parse(localStorage.getItem('cvData')) || blankCVData)
    console.log(cvData)

    useEffect(() => {
        localStorage.setItem('cvData', JSON.stringify(cvData))
    },[cvData])

    function handlePersonalChange(event) {
        const { name, value, type } = event.target;

        if (type === 'file'){
            handleChangeFile(event);
            return
        }

        console.log(name)
        setCvData(
            {
                ...cvData,
                [name]: value
            }
        )
    }

    function handleChangeFile(event) {
        const { name } = event.target
        const file = event.target.files[0]
        if (!file) return

        const reader = new FileReader()
        reader.onload = () => {
          setCvData({  
              ...cvData,
              [name]: reader.result,
            })
        }
        reader.readAsDataURL(file)
    }

    function handleEducationChange(event) {
        console.log('change education')
        const {id, name, value} = event.target
        
        const newEducationArray = cvData.education.map(item => {
            if(id === item.id) {
                return (
                    {
                        ...item,
                        [name]: value
                    }
                )
            }
            return item
        })
        setCvData({
            ...cvData,
            education: newEducationArray
        })
    }

    function handleExperienceChange(event) {
        console.log('change experience')
        const {id, name, value} = event.target

        const newExperienceArray = cvData.experience.map(item => {
            if(id === item.id) {
                return (
                    {
                        ...item,
                        [name]: value
                    }
                )
            }
            return item
        })
        setCvData({
            ...cvData,
            experience: newExperienceArray
        })
    }

    function handleAddEducation() {
        console.log('add education')
        setCvData({
            ...cvData,
            education: [
                ...cvData.education,
                {
                    id: uuid(),
                    degree: '',
                    university: ''
                }
            ]
        })
    }

    function handleAddExperience() {
        console.log('add experience')
        setCvData({
            ...cvData,
            experience: [
                ...cvData.experience,
                {
                    id: uuid(),
                    title: '',
                    place: '',
                    start: '',
                    end: ''
                }
            ]
        })
    }

    function handleDeleteEducation(id) {
        console.log('delete education')
        const newEducationArray = cvData.education.filter(item => {
            if(item.id !== id) {
                return item
            }
        })
        setCvData({
            ...cvData,
            education: newEducationArray
        })
    }

    function handleDeleteExperience(id) {
        const newExperienceArray = cvData.experience.filter(item => {
            if(item.id !== id) {
                return item
            }
        })
        setCvData({
            ...cvData,
            experience: newExperienceArray
        })
    }

    function handleExampleCv() {
        console.log('load example cv')
        setCvData(exampleCVData)
    }

    function handleResetCv() {
        setCvData(blankCVData)
    }

    return (
        <MainContentWrapper>
            <CVForm
            cvData={cvData}
            handlePersonalChange={handlePersonalChange}
            handleEducationChange={handleEducationChange}
            handleExperienceChange={handleExperienceChange}
            handleAddEducation={handleAddEducation}
            handleAddExperience={handleAddExperience}
            handleDeleteEducation={handleDeleteEducation}
            handleDeleteExperience={handleDeleteExperience}
            handleExampleCv={handleExampleCv}
            handleResetCv={handleResetCv} />
            <CVPreview 
            cvData={cvData} />
        </MainContentWrapper>
    )
}


const MainContentWrapper = styled.main`
    width: 90%;
    margin-inline: auto;
    display: flex;
    gap: 5px;
    margin-bottom: 30px;
`

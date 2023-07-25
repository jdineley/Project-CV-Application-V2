import Education from "./education"
import Experience from "./Experience"

import styled from 'styled-components'

export default function Main({ cvData }) {

    const EducationElements = cvData.education.map(item => {
        return <Education key={item.id} item={item} />
    })

    const ExperienceElements = cvData.experience.map(item => {
        return <Experience key={item.id} item={item}/>
    })

    
    return (
        <MainWrapper>
                <h2>Personal Statement</h2>
            <StyledPersonalStatement>
                <p>{cvData.statement}</p>
            </StyledPersonalStatement>
                <h2>Education</h2>
            <StyledEducationSection>
                {EducationElements}
            </StyledEducationSection>
                <h2>Experience</h2>
            <StyledExperienceSection>
                {ExperienceElements}
            </StyledExperienceSection>
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    `
const StyledPersonalStatement = styled.div`
    margin-bottom: 30px;
`
const StyledEducationSection = styled.div`
    margin-bottom: 30px;    
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const StyledExperienceSection = styled.div`
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

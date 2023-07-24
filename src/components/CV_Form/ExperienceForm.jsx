import styled from 'styled-components'

export default function ExperienceForm({ 
    id,
    title, 
    place, 
    start, 
    end,
    handleExperienceChange,
    handleDeleteExperience }) {

    return (
        <ExperienceFormWrapper>
            <input placeholder="job title" type="text" name="title" id={id} value={title} onChange={handleExperienceChange} />
            <input placeholder="place of work" type="text" name="place" id={id} value={place} onChange={handleExperienceChange} />
            <input placeholder="start date" type="text" name="start" id={id} value={start} onChange={handleExperienceChange} />
            <input placeholder="end date" type="text" name="end" id={id} value={end} onChange={handleExperienceChange} />
            <StyledDeleteButton onClick={() => handleDeleteExperience(id)}>Delete Experience</StyledDeleteButton>
        </ExperienceFormWrapper>
    )
}

const ExperienceFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
const StyledDeleteButton = styled.button`
    background-color: ${({theme}) => theme.colors.red}
`

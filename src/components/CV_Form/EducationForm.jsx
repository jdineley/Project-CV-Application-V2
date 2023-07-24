import styled from 'styled-components'


export default function EducationForm({ 
    id, 
    degree, 
    university, 
    handleEducationChange,
    handleDeleteEducation}) {

    return(
        <EducationFormWrapper>
            <input type="text" placeholder="degree.." value={degree} name="degree" id={id} onChange={handleEducationChange}/>
            <input type="text" placeholder="university.." value={university} name="university" id={id} onChange={handleEducationChange}/>
            <StyledDeleteButton onClick={() => handleDeleteEducation(id)}>Delete Education</StyledDeleteButton> 
        </EducationFormWrapper>
    )
}

const EducationFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const StyledDeleteButton = styled.button`
    background-color: ${({theme}) => theme.colors.red}
`
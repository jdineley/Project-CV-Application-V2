import styled from 'styled-components'


export default function Education({ item }) {

    return (
        <EducationWrapper>
            <div>
                <h5>Qualification</h5>
                <div>{item.degree}</div>
            </div>
            <div>
                <h5>Institution</h5>
                <div>{item.university}</div>
            </div>
        </EducationWrapper>
    )
}

const EducationWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr
    
`
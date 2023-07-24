import styled from 'styled-components'


export default function Experience({item}) {

    return (
        
            <ExperienceWrapper>
                <div>
                    <h5>Job title</h5>
                    <div>{item.title}</div>
                </div>
                <div>
                    <h5>Place of work</h5>
                    <div>{item.place}</div>
                </div>
                <div>
                    <h5>Start date</h5>
                    <div>{item.start}</div>
                </div>
                <div>
                    <h5>End date</h5>
                    <div>{item.end}</div>
                </div>
            </ExperienceWrapper>
        
    )
}

const ExperienceWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`
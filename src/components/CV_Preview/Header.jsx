import styled from 'styled-components'


export default function Header({
    cvData
}) {

    return (
        <HeaderWrapper>
            <StyledName>{cvData.firstName} {cvData.lastName}</StyledName>
            <StyledTitle>{cvData.title}</StyledTitle>
            <ContactWrapper>
                <div><StlyledContactDetail>City:  </StlyledContactDetail>{cvData.city}</div>
                <div>•</div>
                <div><StlyledContactDetail>Tel:  </StlyledContactDetail>{cvData.tel}</div>
                <div>•</div>
                <div><StlyledContactDetail>Email:  </StlyledContactDetail>{cvData.email}</div>
            </ContactWrapper>
            <StyledImage src={cvData.url} />
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    padding: 10px;
    background-color: ${({theme}) => theme.colors.dark};
    color: ${({theme}) => theme.colors.light};
`
const StyledName = styled.div`
    font-size: 7rem;
`

const StyledTitle = styled.div`
    font-size: 3rem;
    grid-row: 2/3;
`
const ContactWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    grid-row: 3/4;
`
const StyledImage = styled.img`
    height: 100%;
    grid-column: 2/-1;
    grid-row: 1/4;
`
const StlyledContactDetail = styled.span`
    font-size: 1.2rem;
    font-weight: 700;
`

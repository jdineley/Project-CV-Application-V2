import styled from 'styled-components'
import stockPhoto from '../../assets/stock_photo.png'

export default function Header({
    cvData
}) {

    return (
        <HeaderWrapper>
            <StyledName>{cvData.firstName} {cvData.lastName}</StyledName>
            <StyledTitle>{cvData.title}</StyledTitle>
            <ContactWrapper>
                <div><StlyledContactDetail>City: </StlyledContactDetail>{cvData.city}</div>
                <div>•</div>
                <div><StlyledContactDetail>Tel: </StlyledContactDetail>{cvData.tel}</div>
                <div>•</div>
                <div><StlyledContactDetail>Email: </StlyledContactDetail>{cvData.email}</div>
            </ContactWrapper>
            <StyledImage src={stockPhoto} />
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: 75% 25%;
    padding: 10px;
    background-color: ${({theme}) => theme.colors.dark};
    color: ${({theme}) => theme.colors.light};

`
const StyledName = styled.div`
    font-size: 5rem;
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
    font-weight: 700;
`

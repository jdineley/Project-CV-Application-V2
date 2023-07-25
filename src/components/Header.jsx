import styled from 'styled-components'

export default function Header() {

    return(
        <HeaderWrapper>
            <h1>CV Creator</h1>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    margin-bottom: 30px;
    background-color: ${({theme}) => theme.colors.green }
`
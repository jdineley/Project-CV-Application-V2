import styled from 'styled-components'

export default function Footer() {

    return (
        <FooterWrapper>
            <p>Copyright © 2023 JDineley </p>
            <a href="https://github.com/jdineley">github</a>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    margin-bottom: 30px;
    background-color: ${({theme}) => theme.colors.green }
`

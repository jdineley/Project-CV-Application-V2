import styled from 'styled-components'
import Header from './Header'



export default function CVPreview({
    cvData
}) {

    return (
        <CVPreviewWrapper>
            {/* <h1>CVPreview</h1> */}
            <Header cvData={cvData}/>
        </CVPreviewWrapper>
        
    )
}


const CVPreviewWrapper = styled.div`
    width: 210mm;
    height: 297mm;
    border: 1px solid black;
    border-radius: 5px;
`
import styled from 'styled-components'

export default function Personal({
    cvData,
    handlePersonalChange
}) {

    return (
        <PersonalDetailsWrapper>
            <h3>Personal Details</h3>
            <input 
            type="text" 
            placeholder="first name.." 
            value={cvData.firstName} 
            name="firstName"
            onChange={handlePersonalChange} />
            
            <input 
            type="text" 
            placeholder="last name.." 
            value={cvData.lastName} 
            name="lastName"
            onChange={handlePersonalChange} />

            <input 
            type="text" 
            placeholder="title.." 
            value={cvData.title} 
            name="title"
            onChange={handlePersonalChange} />

            <input 
            type="text" 
            placeholder="city.." 
            value={cvData.city} 
            name="city"
            onChange={handlePersonalChange} />

            <input 
            type="text" 
            placeholder="tel.." 
            value={cvData.tel} 
            name="tel"
            onChange={handlePersonalChange} />

            <input 
            type="email" 
            placeholder="email.." 
            value={cvData.email} 
            name="email"
            onChange={handlePersonalChange} />

            <textarea 
            placeholder='personal statement...' 
            name="statement" 
            value={cvData.statement} 
            id="" cols="30" rows="10"
            style={{resize: 'none'}} 
            onChange={handlePersonalChange}
             />

            <Label>
                <FileInputWrapper 
                type="file"
                name="url"
                onChange={handlePersonalChange} />
                Photo
            </Label>
        </PersonalDetailsWrapper>
    )
}

const PersonalDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const FileInputWrapper = styled.input`
    display: none;
`

const Label = styled.label`
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid transparent;
    background-color: #fff;
    &:active {
        border: 1px solid ${({ theme }) => theme.colors.dark};
      }
`
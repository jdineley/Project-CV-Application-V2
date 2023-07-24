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
        </PersonalDetailsWrapper>
    )
}

const PersonalDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
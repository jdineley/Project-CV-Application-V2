

export default function Personal({
    cvData,
    handlePersonalChange
}) {

    return (
        <>
            <h2>Personal Details</h2>
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
        </>
    )
}
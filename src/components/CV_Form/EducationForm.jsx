


export default function EducationForm({ 
    id, 
    degree, 
    university, 
    handleEducationChange,
    handleDeleteEducation}) {

    return(
        <>
            <div>
                <input type="text" placeholder="degree.." value={degree} name="degree" id={id} onChange={handleEducationChange}/>
                <input type="text" placeholder="university.." value={university} name="university" id={id} onChange={handleEducationChange}/>
            </div>
            <button onClick={() => handleDeleteEducation(id)}>Delete Education</button>
            
        </>
    )
}
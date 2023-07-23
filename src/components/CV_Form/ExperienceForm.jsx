

export default function ExperienceForm({ 
    id,
    title, 
    place, 
    start, 
    end,
    handleExperienceChange,
    handleDeleteExperience }) {

    return (
        <>
            <div>
                <input placeholder="job title" type="text" name="title" id={id} value={title} onChange={handleExperienceChange} />
                <input placeholder="place of work" type="text" name="place" id={id} value={place} onChange={handleExperienceChange} />
                <input placeholder="start date" type="text" name="start" id={id} value={start} onChange={handleExperienceChange} />
                <input placeholder="end date" type="text" name="end" id={id} value={end} onChange={handleExperienceChange} />
            </div>
            <button onClick={() => handleDeleteExperience(id)}>Delete Experience</button>
        </>
    )
}
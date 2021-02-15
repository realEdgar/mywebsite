import { EduCompo } from './EduCompo'

export const Experience = () => {
    return (
        <div className="Experience-Container">
            <h3 className="Footer-Experience-Title">Experience</h3>
            <EduCompo
                school="Honda of Mexico Celaya plant"
                period="May 2017 - August 2019"
                title="Maintenance specialist"
                description="This is a great description about my last job"
            />
        </div>
    )
}
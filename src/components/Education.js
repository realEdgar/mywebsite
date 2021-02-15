import { EduCompo } from './EduCompo'

export const Education = () => {
    return (
        <div className="Footer-Education">
            <h3 className="Footer-Education-Title" >Education</h3>
            <div className="Footer-Education-Container">
                <EduCompo 
                    school="Tecnologico Nacional de México en Celaya"
                    period="August 2010 - June 2015"
                    title="Bachelor's degree on Electronic Engineer"
                    description="This is a great description about my carrer"
                />
                <EduCompo 
                    school="Platzi.com"
                    period="July 2020 - Present"
                    title="Web Development"
                    description="This is a great description about my carrer"
                />
            </div>
        </div>
    )
}
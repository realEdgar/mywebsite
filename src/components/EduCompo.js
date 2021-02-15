export const EduCompo = (props) => {
    return (
        <div className="Edu-Container">
            <h4 className="Edu-School">{props.school}</h4>
            <p className="Edu-Item">{props.period}</p>
            <h4 className="Edu-Item">{props.title}</h4>
            <p className="Description">{props.description}</p>
        </div>
    )
}

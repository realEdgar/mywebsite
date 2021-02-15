import { GoArrowDown } from 'react-icons/go'

function Project (props) {
    return(
        <article className="Article-Project" >
            <h3 className="Project-Title" >{props.title}</h3>
            <p className="Project-Description">{props.description}</p>
            <div className="Animation-Container">
                <GoArrowDown className="Arrow-Down"/>
            </div>
            <a className="Project-Link" href={props.linked}><span>Check Out</span></a>
        </article>
    )
}

export default Project

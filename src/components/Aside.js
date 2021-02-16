import Title from './Title'
import pic from '../assets/pic-port.jpg'

export const Aside = () => {
    return (
        <aside className="Aside" >
            <div className="Aside-left">
                <Title classs="Profile-title" title="About Me" />
                <figure className="Pic-Container">
                    <img className="Profile-Pic" src={pic} alt="My profile Picture" />
                </figure>            
                <p className="Description">
                    I am Electronic Engineer and an enthusiastic for Web Development (Frontend-side). I am creative and competitive. 
                    I've been working with diferents projects about Web Development. Using HTML5, CSS3, JavaScript, React.js,
                    CSS' Preprossesors (Sass, Less and Stylus), Versions control Git and GitHub.
                </p>
            </div>
        </aside>
    )
}

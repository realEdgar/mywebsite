import Title from './Title'
import { Nav } from './Nav'
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
                    I am an enthusiastic for Web Development (Frontend) and the Electronic. I am creative and competitive. 
                    I've been working with diferents projects about Web Development and electronic, you could see
                    more on the projects section.
                </p>
            </div>            
            <Nav />
        </aside>
    )
}

import { withRouter } from 'react-router'
import { Nav } from './Nav'
import Title from './Title'

const Header = () => {
    return(
        <header className="Header">
            <Title classs="Carrer" title="Electronic Engineer / Frontend Developer" />                                      
            <Title classs="Carrer" title="Edgar López Arroyo" />
            <Nav />
        </header>
    )
}

export default withRouter(Header)

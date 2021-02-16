import { SiCss3, SiJavascript } from 'react-icons/si'
import { GrReactjs } from 'react-icons/gr'
import { ImHtmlFive } from 'react-icons/im'
import { withRouter } from 'react-router'

const Footer = () => {
    return(
        <footer className="Footer" id="footer-id">
            <h3>This website was made with: </h3>
            <div className="Tools-Container">
                <GrReactjs className="React"/>
                <SiCss3 className="css3"/>
                <ImHtmlFive className="html5"/>
                <SiJavascript className="js"/>
            </div>            
        </footer>
    )
}

export default withRouter(Footer)
import { IoIosMail } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'
import { GoOctoface } from 'react-icons/go'
import { TiPhone } from 'react-icons/ti'
import { AiFillLinkedin } from 'react-icons/ai'

export const Contact = () => {
    return (
        <div className="Footer-Contact">
            <h3 className="Footer-title" >Contact</h3>
            <div className="Icons-Container">
                <a className="Icon-Link" href="mailto:edg.lop.arr@gmail.com"><IoIosMail className="Icons"/><span>edg.lop.arr@gmail.com</span></a>
                <a className="Icon-Link" href="#"><TiPhone className="Icons"/><span>+52 461 335 3233</span></a>
                <a className="Icon-Link" herf="https://github.com/"><GoOctoface className="Icons"/><span>GitHub</span></a>
                <a className="Icon-Link" href="https://www.linkedin.com/in/edgar-lopez-24a904201/"><AiFillLinkedin className="Icons"/><span>LinkedIn</span></a>
                <a className="Icon-Link" href="#"><IoLocationSharp className="Icons"/><span>Celaya, Guanajuato, México</span></a>
            </div>
        </div>
    )
}
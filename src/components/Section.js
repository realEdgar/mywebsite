import Title from './Title'
import Project from './Project'

export const Section = () => {
    return (
        <section id="section-id">
            <Title classs="Title-Projects" title="Projects" />
            <Project 
                title="Batatabit"
                description="This project is a landing page made with HTML and CSS. I was practicing using FIgma as a UI design."
                linked ="https://realedgar.github.io/batata/"
            />
            <Project 
                title="Google Clone"
                description="This project is a landing page made with HTML, CSS. It'ss a clone of the Google searcher."
                linked="https://realedgar.github.io/googleClone/"
            />
            <Project 
                title="Premium Viedeo"
                description="This project is a landing page made with HTML, CSS and JavaScript. This is just for mobile."
                linked="https://realedgar.github.io/premiumvideo/"
            />
            <Project 
                title="ATM"
                description="This project is a simulator of ATM. You set How many you want to draw in Dollars"
                linked="https://realedgar.github.io/ATM/"
            />
            {/* <Project 
                title="Pokedex"
                description="This project is a landing page made with HTML, CSS and JavaScript too get information from an API."
                linked="https://realedgar.github.io/pokedex/"
            /> */}
        </section>
    )
}
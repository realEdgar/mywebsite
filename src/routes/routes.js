import { Fragment } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from '../containers/Home'
import { Section } from '../components/Section'
import { Education } from '../components/Education'
import { Experience } from '../components/Experience'
import { Contact } from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Router = () => {
    return (
        <BrowserRouter basename="/mywebsite">
            <Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/projects" component={Section} />
                    <Route exact path="/education" component={Education} />
                    <Route exact path="/experience" component={Experience} />
                    <Route exact path="/contact" component={Contact} />
                    <Redirect from="/p" to="/projects" />
                </Switch>
                <Footer />
            </Fragment>
        </BrowserRouter>
    )
}

export default Router;
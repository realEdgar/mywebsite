import React from 'react'

class Title extends React.Component {
    render(){
        return (
            <div className="Title" >
                <h1 className={this.props.classs} >{this.props.title}</h1>
            </div>        
        )
    }
        
}

export default Title
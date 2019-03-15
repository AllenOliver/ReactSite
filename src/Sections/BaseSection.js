import React, { Component } from 'react';


class BaseSection extends Component {
    render(){
        return(
            <div className="container-fluid" id={this.props.id}>
                <div className="row">
                    <div className="col-md-12 justify-content-center">
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>

        );
    }
}
export default BaseSection;
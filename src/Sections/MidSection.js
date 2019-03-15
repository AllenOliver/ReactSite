import React from 'react';
import BaseSection from './BaseSection'

class MidSection extends React.Component {
    render(){
        return(
            <BaseSection {...this.props.text} {...this.props.id}  />
        );
    }
}
export default BaseSection;
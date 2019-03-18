import React from 'react';
import BaseSection from './BaseSection'

class NewsletterSection extends React.Component {
    render(){
        return(
            <div className="formHolder">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>

                    </div>
                </form>
            </div>
        );
    }
}
export default BaseSection;
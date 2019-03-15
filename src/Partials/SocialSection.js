import React from 'react';

class SocialSection extends React.Component {
    render(){
        return(
        <div className="socialContaner">
            <div className="row" id="socialRow">
            <ul className="socialList">
                <li id="SocialIcon"><i class="fab fa-facebook"></i></li>
                <li id="SocialIcon"><i class="fab fa-twitter"></i></li>
                <li id="SocialIcon"><i class="fab fa-linkedin"></i></li>

            </ul>
                <div className="col-sm-4" id="SocialIcon"><i class="fab fa-facebook"></i></div>
                <div className="col-sm-4" id="SocialIcon"><i class="fab fa-twitter"></i></div>
                <div className="col-sm-4" id="SocialIcon"><i class="fab fa-linkedin"></i></div>
            </div>
        </div>
        );

    }
}
export default SocialSection;
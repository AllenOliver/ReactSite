import React from 'react';

class SocialSection extends React.Component {
    render(){
        return(
        <div className="socialContaner">
            <div className="row justify-content-center" id="socialRow">
                <ul className="socialList">
                    <li id="SocialIcon"><a href="#"><i class="fab fa-facebook"></i></a></li>
                    <li id="SocialIcon"><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li id="SocialIcon"><a href="#"><i class="fab fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
        );

    }
}
export default SocialSection;
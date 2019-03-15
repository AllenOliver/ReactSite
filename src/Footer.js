import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (

        
        <footer class="bg-dark text-white mt-4">
    <div class="container-fluid py-3">
        <div class="row">
            <div class="col-lg-4 text-center">We should <span class="small"><br />put an ad here...</span></div>
            <div class="col-lg-4 text-center " >
                <div className="row justify-content-center">
                    <h3 className="text-center" id="socialHeaderText">Social</h3>
                </div>
                <hr/>
                <div className="row justify-content-center">
                    <div id="social"></div>
                </div>
            </div>
            <div class="col-lg-4 text-center small ">©2019 Test Company, Inc.</div>
        </div>
    </div>
</footer>

    );
  }
}

export default Footer;
import React from 'react';


class EndSection extends React.Component {
    
    render(){
        return(
            <div className="row">
                <div class="col-md-1"></div>
                <div class="col-md-10 " >
                    <div class="row justify-content-center">
                        <h2 align="center">This is a test text</h2>
                    </div>
                    <div class="row"></div>
                    <div class="row justify-content-center">
                    <p>
                        <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Link with href
                        </a>
                        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Button with data-target
                        </button>
                    </p>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <script>
                    document.getElementsByClassName('.collapse').collapse();
                </script>
            </div>


            //<BaseSection {...this.props.text} {...this.props.id}  />
        );
    }
}
export default EndSection;
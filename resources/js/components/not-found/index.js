import React from 'react';

export default class NotFound extends React.Component {
    render () {
        return (
            <div className="d-flex flex-grow-1">
                <div className="page-section w-100">
                    <div className="container ">
                        <div className="row">
                            <div className="col">
                            
                                <div className="alert alert-info" role="alert">                        
                                   Ця сторінка в розробці.
                                </div>

                                <p>А поки, ознайомтесь з нашим YouTube каналом.</p>

                                <div>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/BrLEOE-Mnkk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    };
}
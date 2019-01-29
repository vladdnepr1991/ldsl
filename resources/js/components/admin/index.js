import React from 'react';
import { Link } from "react-router-dom";

export default class Admin extends React.Component {
    render () {
        return (
            <div className="d-flex flex-grow-1">
                <div className="page-section w-100">
                    <div className="container ">
                        <div className="row">
                            <div className="col">
                                <h1>Admin panel</h1>

                                <div>
                                  <Link to="/projects/create">New Project</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
import React from "react";
import { Link } from 'react-router-dom';

function Card(props) {
    if (props.content.length === 0) {
        return (
           <h2>Loading data ...</h2>
        )
    }
    else
    return (
            <div className="card-body">
                        {
                            props.content.map((e) => {
                                return (
                                
                                    <Link to = {`/job/${e.id}`} key={e.id}>
                                    <div className="card">
                                        <p className="job-type" id={e.id}>{e.type}</p>
                                        <img className="job-company-logo" src={e.company_logo} alt="company-logo"></img>
                                        <h3 className="job-title">{e.title}</h3>
                                        <p className="job-company">{e.company}</p>
                                        <p className="job-location">{e.location}</p>
                                    </div>
                                    </Link>
                                    
                                );
                            })
                        }
                    </div>
    )
}

export default Card;

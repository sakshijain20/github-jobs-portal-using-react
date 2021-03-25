import React from "react";
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
                    
                        <div className="card">
                            <img className="job-company-logo" src={e.company_logo} alt="company logo"></img>
                            <p className="job_type" id={e.id}>{e.type}</p>
                            <h4 className="title">{e.title}</h4>
                            <p className="company_name">{e.company}</p>
                            <p className="location">{e.location}</p>
                        </div>
                        
                    );
                })
            }
        </div>
    )
}

export default Card;

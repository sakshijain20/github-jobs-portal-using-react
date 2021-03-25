import React from 'react';

class JobView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: []
        }
    }

    componentDidMount() {
        var content = this;
        const { match: { params } } = content.props;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var json = JSON.parse(this.responseText)
                 content.setState({
                    description: json
                })
                document.getElementsByClassName('description-body')[0].innerHTML += content.state.description.description
                document.getElementsByClassName('description-body')[0].innerHTML += content.state.description.how_to_apply
            }
        }
        xhttp.open("GET", `https://jobs.github.com/positions/${params.id}.json`, true);
        xhttp.send();

    }


    render() {
        
        return (
        
            <React.Fragment>
                <div class="header">

                <div class="header-items">
                    <h1>devjobs</h1>
                </div>


                <div class="describe-bar">
                    <div class="job-view-describe">
                        <img src={this.state.description.company_logo} height="170" width="200" alt="comapny logo"/>
                        <h2 class="job-view-title">{this.state.description.company}</h2>
                    </div>
                    <a href = {this.state.description.company_url} ><button type="button" class="job-view-site">Company Site</button></a>
                </div>
            </div>
            
            <div class="description-body">
                    <div class="description-header">
                        <div class="description-title">
                            <p class="description_job-type">{this.state.description.type}</p>
                            <h3 class="job-title">{this.state.description.title}</h3>
                            <p class="job-location">{this.state.description.location}</p>
                        </div>
                        <div class="apply-now">
                            <a href = {this.state.description.how_to_apply}><button type="button" class="apply-now-btn">Apply Now</button></a>
                        </div>
                    </div>
            </div>
          </React.Fragment>  
        )
    }
}

export default JobView;
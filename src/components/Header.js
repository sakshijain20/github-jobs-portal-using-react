import React from 'react';
import ReactDOM from 'react-dom';


class Header extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            data: [],
            is_data_loaded: false
        }

        this.getData = this.getData.bind(this);
        this.search=this.search.bind(this);
    }


    getData() {
          this.setState({
            is_data_loaded: true
        })
        var main_data = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var json = JSON.parse(this.responseText);

                main_data.setState({
                    data: main_data.state.data.concat(json)
                })

            }
        }
        xhttp.open("GET", "https://jobs.github.com/positions.json?utf-8=true", true);
        xhttp.send();

    }

    search()
    {
        this.setState({
            is_data_loaded: true
        })
        var main_data = this;
        var title = document.getElementById("s-title").value.trim()
        var location = document.getElementById("s-location").value.trim()
        var fullTime = document.getElementById("s-full-time").checked
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var json = JSON.parse(this.responseText);
                main_data.setState({
                    data: main_data.state.data.concat(json)
                })

            }
        }
        xhttp.open("GET", `https://jobs.github.com/positions.json?description=${title}&location=${location}&full_time=${fullTime}`, true);
        xhttp.send();

    }


    render(){
        return (
            <React.Fragment>
                <div>
                    <div className="header">
                        <div className="header-items">
                            <h1>devjobs</h1>
                        </div>
                        <div className="search-bar">
                            <i className="fa fa-lg" aria-hidden="true"></i>
                            <input type="text" id="s-title" name="s-title" placeholder="Filter by title, companies, expertise . . ." />
                            <div className="d"></div>
                            <i className="fa fa-lg" aria-hidden="true"></i>
                            <input type="text" id="s-location" name="s-location" placeholder="Filter by location . . ." />
                            <div className="d"></div>
                            <input type="checkbox" id="s-full-time" name="s-full-time" />&nbsp;
                            <label for="s-full-time">Full Time only</label>
                             <button type="button" className="search-button" onClick={this.search}>Search</button>
                        </div>
                      
                    </div>


                <button type="button" className="load_btn" onClick={this.getData}>Load More</button>

                </div>
                </React.Fragment>
            );
    }
}


ReactDOM.render(<Header  />, document.getElementById('root'));
export default Header;
import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component{
    render(){
        return (
                
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
                            <button type="button" id="search-button" onclick="searchFunc()">Search</button>
                        </div>
                       
                    </div>
                  

            );
    }
}


class LoadDoc extends React.Component {

  handleClick = () => {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
                //get_data(this.responseText);
            }
            else
                alert("no data found");
           
          };
          xhttp.open("GET", "https://jobs.github.com/positions.json?utf-8=true", true);
          xhttp.send();
  }

  render() {
    return (
      console.log("in load doc")
    );
  }
}

function get_data(data){
    //var container = document.getElementById("card-body");
    //const jobs = JSON.parse(data)
    
    console.log(data);
    //jobs.forEach(e => {
      //  var card = document.createElement('div');
        //card.classNameList = 'card';
        //const cont = `
          //  <img className = "company_logo" src = "${e.company_logo}">
            //<p className = "job_type" id = "${e.id}">${e.type}</p>
           // <h4 className = "title">${e.title}</h4>
           // <p className = "company_name">${e.company}</p>
           // <p className = "location">${e.location}</p>
       // `;

        // card.innerHTML = cont;
        //card.addEventListener('click', getId);
        // container.append(card);

    }
  


ReactDOM.render(<Header  />, document.getElementById('root'));
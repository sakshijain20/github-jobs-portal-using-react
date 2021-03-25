import React from 'react';
import ReactDOM from 'react-dom';
class LoadData extends React.Component {

  handleClick = () => 
  {
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
      <button onClick={this.handleClick} className="load_btn">
       Load data
      </button>
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

export default LoadData
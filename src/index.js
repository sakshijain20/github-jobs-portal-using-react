import React from 'react';
import ReactDOM from 'react-dom';



class Header extends React.Component{
    render(){
        return (

                    <div class="header">
                        <div class="header-items">
                            <h1>devjobs</h1>
                        </div>
                        <div class="search-bar">
                            <i class="fa fa-lg" aria-hidden="true"></i>
                            <input type="text" id="s-title" name="s-title" placeholder="Filter by title, companies, expertise . . ." />
                            <div class="d"></div>
                            <i class="fa fa-lg" aria-hidden="true"></i>
                            <input type="text" id="s-location" name="s-location" placeholder="Filter by location . . ." />
                            <div class="d"></div>
                            <input type="checkbox" id="s-full-time" name="s-full-time" />&nbsp;
                            <label for="s-full-time">Full Time only</label>
                            <button type="button" id="search-button" onclick="searchFunc()">Search</button>
                        </div>
                    </div>


            );
    }
}



ReactDOM.render(<Header  />, document.getElementById('root'));
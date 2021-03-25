import React from 'react';
import ReactDOM from 'react-dom';
import LoadData from './LoadData';

class Header extends React.Component{
    render(){
        return (
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
                            <button type="button" id="search-button" onclick="searchFunc()">Search</button>
                        </div>
                      
                    </div>
                   <LoadData />
                </div>
            );
    }
}

ReactDOM.render(<Header  />, document.getElementById('root'));
export default Header;
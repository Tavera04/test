import React from 'react';
import { Link } from 'react-router-dom';

function ContentPage()
{
    return(
        <div>
            <h1>This is the content page</h1>
            <Link to="/test">Go to Home</Link>        
        </div>
    )
}

export default ContentPage;
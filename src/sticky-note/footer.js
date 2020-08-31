import React from 'react';
import './Header.css';

class footer extends React.Component{


render(){
const cd= new Date().getFullYear();
return(
<footer>
<p> Copyright Ⓒ {cd}</p>
</footer>

);

}

}
export default footer;
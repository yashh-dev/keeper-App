import react from "react";

var d= new Date();
var year = d.getFullYear();

function Footer(){
    return <footer>
        <p>©{year}</p>
    </footer>
}

export default Footer;
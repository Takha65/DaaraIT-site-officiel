import "../motdupresi/motdupresi.css";
function Container({children}) {
    return ( 
        <div className="ps-32">
            {children}
        </div>
     );
}

export default Container;
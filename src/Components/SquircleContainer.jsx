import "./Style.css";

const SquircleContainer = (props) => {
    return(
        <div className="squircle-container">
            {props.children}
        </div>
    );
};

export default SquircleContainer;
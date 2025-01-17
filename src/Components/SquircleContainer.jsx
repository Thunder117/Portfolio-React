import "./Style.css";

const SquircleContainer = (props) => {
    return(
        <div className="squircle-container" id={props.id}>
            {props.children}
        </div>
    );
};

export default SquircleContainer;
import "./Style.css";

const InfoContainer = (props) => {
    return(
        <div className="info-container">
            {props.children}
        </div>
    );
};

export default InfoContainer;
import "./Style.css";

const ButtonsContainer = (props) => {
    return(
        <div className="buttons-container">
            {props.children}
        </div>
    );
};

export default ButtonsContainer;
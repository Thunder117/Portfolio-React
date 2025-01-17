import "./Style.css";

const BentoItem = (props) => {
    return(
        <button className="bento-item" onClick={props.onClick}>
            <img src={props.gif} alt="GIF Preview" width="100%" />
        </button>
    );
};

export default BentoItem;
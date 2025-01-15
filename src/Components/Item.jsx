import "./Style.css";

const Item = (props) => {
    return(
        <li className="item">
            {props.children}
        </li>
    );
};

export default Item;
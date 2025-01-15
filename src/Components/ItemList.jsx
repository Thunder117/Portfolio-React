import "./Style.css";

const ItemList = (props) => {
    return(
        <ul className="item-list">
            {props.children}
        </ul>
    );
};

export default ItemList;
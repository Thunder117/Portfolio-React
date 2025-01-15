import "./Style.css";

const Nav = (props) => {
    return(
        <nav>
            {props.children}
        </nav>
    );
};

export default Nav;
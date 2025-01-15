import "./Style.css";

const Button = ({ link, color, children }) => {
    return (
        <a href={link} className={`button ${color}`}>
            {children}
        </a>
    );
};


export default Button;
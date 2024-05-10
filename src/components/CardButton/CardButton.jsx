import "./CardButton.css";

function CardButton({ children, className }) {
  const classes = "card-button " + (className ? className : "");
  return <div className={classes}>{children}</div>;
}

export default CardButton;

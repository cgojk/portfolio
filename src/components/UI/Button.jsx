import { Link } from "react-router-dom";
import classNames from "classnames";

export default function Button({
  children,
  to,
  href,
  className,
  type="button",
 size
}) {
  const classes = classNames(
    "button", 
   size ? `button--${size}` : null,
     className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }


   return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}

export const Button = ({ value, classList,handleClick, ...props }) => {
  return <button className={classList} onClick={()=>handleClick(value)}>{value}</button>;
};

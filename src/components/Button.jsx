const Button = (props) => {
  return (
    <button className={`bg-red-700 text-white p-2 rounded-md text-sm ${props.className}`} onClick={props.onClick} >{props.children}</button>
  )
}

export default Button
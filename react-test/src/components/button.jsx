

function Button({
  text = "login",
  color = "blue",
  disabled = true,
}) {
  return (
    <button
      style={{ backgroundColor: color }}
      disabled={disabled}
    onClick={Button}>
      {text}
    </button>
    
  );
}

export default Button
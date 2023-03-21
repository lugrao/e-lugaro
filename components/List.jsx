function renderItem(item, index) {
  if (typeof item === "string") {
    return <li key={index}>{item}</li>
  }

  return (
    <ul key={index}>
      {item.map((subItem, index) => renderItem(subItem, index))}
    </ul>
  )
}

export const List = ({ items, ...props }) => {
  return (
    <ul {...props}>{items.map((item, index) => renderItem(item, index))}</ul>
  )
}

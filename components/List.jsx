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

/*

Recursively renders a list with the following structure:

[
  "Item 1",
  [
    "Item 1.1",
    [
      "Item 1.1.1",
      [
        "Item 1.1.1.1.",
        "Item 1.1.1.2",
        "Item 1.1.1.3",
      ],
      "Item 1.1.2",
      "Item 1.1.3",
    ],
    "Item 1.2",
    "Item 1.3",
  ],
  "Item 2",
  "Item 3",
]

*/

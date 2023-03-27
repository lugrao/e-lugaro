export const List = ({ items, ...props }) => {
  function renderList(items) {
    return items.map((item, index) => {
      if (item.children) {
        return (
          <li key={index}>
            {item.listItem}
            <ul>{renderList(item.children)}</ul>
          </li>
        )
      } else {
        return <li key={index}>{item.listItem}</li>
      }
    })
  }

  return <ul {...props}>{renderList(items)}</ul>
}

/*

Recursively renders a list with the following structure:
[
  { 
    listItem: item1,
    children: [
      {
        listItem: item1.1,
        children: [
          {
            listItem: item1.1.1,
          }
        ]
      },
      {
        listItem: item1.2,
      }
    ],
  },
  {
    listItem: item2,
  },
  {
    listItem: item3,
  },
]

*/

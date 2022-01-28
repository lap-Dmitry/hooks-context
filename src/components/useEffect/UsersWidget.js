export default function UsersWidget({ item, clickHandler }) {

  return (
    <li onClick={() => clickHandler(item.id)} className="list-item">{item.name}</li>
  );
}

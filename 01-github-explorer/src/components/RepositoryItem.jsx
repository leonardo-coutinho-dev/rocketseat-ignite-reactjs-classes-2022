export function RepositoryItem(props) {
  return (
    <li>
      <p>{props.repository?.name}</p>
      <p>{props.repository?.description}</p>
      <a href={props.repository?.html_url}>Acessar repositório</a>
    </li>
  );
}

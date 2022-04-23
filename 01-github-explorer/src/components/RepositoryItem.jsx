export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.title ?? 'Default title'}</strong>
      <p>{props.repository?.description ?? 'Default description'}</p>
      <a href={props.repository?.link ?? 'https://www.google.com'}>
        Acessar repositório
      </a>
    </li>
  );
}

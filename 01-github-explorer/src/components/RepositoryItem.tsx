interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
};

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <p>{props.repository.name}</p>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
};

const repositoryName = 'Nome do repositório';

export function RepositoryList() {
  return (
    <section className="repositoryList">
      <h1>Lista de repositórios</h1>
      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Descrição do repositório</p>
          <a href="">Acessar repositório</a>
        </li>

        <li>
          <strong>{repositoryName}</strong>
          <p>Descrição do repositório</p>
          <a href="">Acessar repositório</a>
        </li>

        <li>
          <strong>{repositoryName}</strong>
          <p>Descrição do repositório</p>
          <a href="">Acessar repositório</a>
        </li>
      </ul>
    </section>
  );
}

import { RepositoryItem } from './RepositoryItem';

const repository = {
  title: 'Título do repositório',
  description: 'Descrição do repositório',
  link: 'https://github.com/unform/unform',
};

export function RepositoryList() {
  return (
    <section className="repositoryList">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem />
      </ul>
    </section>
  );
}

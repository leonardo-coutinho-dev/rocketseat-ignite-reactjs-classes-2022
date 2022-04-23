import { useEffect, useState } from 'react';

import { RepositoryItem } from './RepositoryItem';

const repository = {
  title: 'Título do repositório',
  description:
    'Descrição do repositório Descrição do repositório Descrição do repositório',
  link: 'https://github.com/unform/unform',
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repositoryList">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}

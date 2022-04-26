import './styles/main.sass';
import { RepositoryList } from './components/RepositoryList';
import { Counter } from './components/Counter';

export function App() {
  // throw new Error('Eita Giovana, o forninho caiu!');
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  );
}

import "./styles/main.sass";
import { RepositoryList } from "./components/RepositoryList";
import { Counter } from "./components/Counter";
import UserData from "./components/UserData";

export function App() {
  return (
    <>
      <Counter />
      <UserData />
      <RepositoryList />
    </>
  );
}

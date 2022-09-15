import Modal from "react-modal";

import closeSvg from "../../assets/close.svg";
import incomeSvg from "../../assets/income.svg";
import outcomeSvg from "../../assets/outcome.svg";

import { Container, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeSvg} alt="Fechar o modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título" type="text" />
        <input placeholder="Valor" type="number" />
        <TransactionTypeContainer>
          <button>
            <img src={incomeSvg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button>
            <img src={outcomeSvg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        <input placeholder="Categoria" type="text" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

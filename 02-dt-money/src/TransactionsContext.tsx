import React, { createContext, useEffect, useState } from "react";

import { api } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

// type TransactionInput = Pick<Transaction, 'title' | 'type' | 'category' | 'amount'>

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsProverProps {
  children?: React.ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export const TransactionsProvider = ({ children }: TransactionsProverProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post("/transactions", transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

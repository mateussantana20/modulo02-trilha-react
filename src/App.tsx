import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { TrasactionsProvider } from './hooks/useTransactions';


Modal.setAppElement('#root');


export function App() {

  const [ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);
  
  function handleOpenNewTransactionModal () {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal () {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TrasactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TrasactionsProvider>
  );
}

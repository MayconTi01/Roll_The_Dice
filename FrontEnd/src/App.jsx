import React, { useState } from "react";
import "./App.css";

function App() {
  const diceOptions = [4, 6, 8, 10, 12, 20, 100];
  const [selectedDice, setSelectedDice] = useState(6);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // FUNÇÃO MOCADA (Simula o comportamento do Back-end)
  const handleRollDice = () => {
    setLoading(true);

    // Simula um pequeno atraso de 600ms para parecer uma requisição real
    setTimeout(() => {
      // Lógica que estaria no back-end:
      // Gera um número aleatório entre 1 e o número de lados do dado
      const simulatedResult = Math.floor(Math.random() * selectedDice) + 1;

      setResult(simulatedResult);

      // Adiciona ao histórico
      const newEntry = {
        dice: `D${selectedDice}`,
        value: simulatedResult,
        time: new Date().toLocaleTimeString(),
      };
      setHistory([newEntry, ...history]);

      setLoading(false);
    }, 600);
  };

  const clearHistory = () => setHistory([]);

  return (
    <div className="app-container">
      <header>
        <h1>Roll The Dice</h1>
        <p className="subtitle">Simulação Front-end (Offline Mode)</p>
      </header>

      <main className="game-area">
        {/* Seleção de Dados */}
        <div className="dice-selector">
          {diceOptions.map((sides) => (
            <button
              key={sides}
              className={selectedDice === sides ? "active" : ""}
              onClick={() => {
                setSelectedDice(sides);
                setResult(null); // Limpa o resultado ao trocar de dado
              }}
            >
              D{sides}
            </button>
          ))}
        </div>

        <div className="display-section">
          {/* Visual do Dado e Resultado */}
          <div className="result-card">
            <div className="dice-info">Dado Selecionado: D{selectedDice}</div>
            <div className={`result-value ${loading ? "rolling" : ""}`}>
              {loading ? "?" : result || "-"}
            </div>
            <button
              className="roll-button"
              onClick={handleRollDice}
              disabled={loading}
            >
              {loading ? "Rolando..." : `Rolar D${selectedDice}`}
            </button>
          </div>

          {/* Histórico lateral conforme o PDF */}
          <div className="history-container">
            <div className="history-header">Histórico de Rolagens</div>
            <div className="history-log">
              {history.length === 0 ? (
                <p className="empty-msg">Nenhuma rolagem ainda.</p>
              ) : (
                history.map((item, index) => (
                  <p key={index} className="history-item">
                    <span className="log-dice">- {item.dice}:</span>
                    <span className="log-val"> {item.value}</span>
                    <span className="log-time"> [{item.time}]</span>
                  </p>
                ))
              )}
            </div>
            <button className="clear-button" onClick={clearHistory}>
              Limpar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

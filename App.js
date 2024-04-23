import React, { useState } from 'react';
import './App.css'; // Arquivo CSS para estilização

function App() {


  return (
    <div className="container">
      <div className="webviewContainer">
        <iframe
          src="https://daiaradyba.github.io/CarrinhoEducativo/"
          title="External Content"
          className="webview"
        />
      </div>
    </div>
  );
}

export default App;
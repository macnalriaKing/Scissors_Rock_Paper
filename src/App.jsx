import HandIcon from "./HandIcon";

function App() {
  return (
    <div>
      <h1>가위바위보</h1>
      <div>
        <h2>패를 골라주세요</h2>
        <HandIcon icon="scissors" />
        <HandIcon icon="rock" />
        <HandIcon icon="paper" />
      </div>
    </div>
  );
}

export default App;

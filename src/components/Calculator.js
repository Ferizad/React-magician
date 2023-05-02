import './Calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="interface">
        <div className="buttons" />
        <div className="btn gray">AC</div>
        <div className="btn gray">%</div>
        <div className="btn gray">+/-</div>
        <div className="btn orng">/</div>
        <div className="btn">7</div>
        <div className="btn">8</div>
        <div className="btn">9</div>
        <div className="btn orng">X</div>
        <div className="btn">4</div>
        <div className="btn">5</div>
        <div className="btn">6</div>
        <div className="btn orng">+</div>
        <div className="btn">1</div>
        <div className="btn">2</div>
        <div className="btn">3</div>
        <div className="btn orng">-</div>
        <div className="btn">0</div>
        <div className="btn">.</div>
        <div className="btn">=</div>
      </div>
    </div>
  );
}

export default Calculator;

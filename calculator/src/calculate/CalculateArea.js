import React from "react";
import "./CalculateArea.scss";
import DisplayArea from "./DisplayArea";
import OperandButton from "./OperandButton";
import OperatorButton from "./OperatorButton";

const CalculateArea = () => {
  return (
    <div>
      <DisplayArea />
      <div className="Buttons">
        <div className="ButtonRow">
          <OperatorButton>%</OperatorButton>
          <OperatorButton>CE</OperatorButton>
          <OperatorButton>C</OperatorButton>
          <OperatorButton></OperatorButton>
        </div>
        <div className="ButtonRow">
          <OperatorButton></OperatorButton>
          <OperatorButton></OperatorButton>
          <OperatorButton></OperatorButton>
          <OperatorButton>/</OperatorButton>
        </div>
        <div className="ButtonRow">
          <OperandButton>7</OperandButton>
          <OperandButton>8</OperandButton>
          <OperandButton>9</OperandButton>
          <OperatorButton>X</OperatorButton>
        </div>
        <div className="ButtonRow">
          <OperandButton>4</OperandButton>
          <OperandButton>5</OperandButton>
          <OperandButton>6</OperandButton>
          <OperatorButton>-</OperatorButton>
        </div>
        <div className="ButtonRow">
          <OperandButton>1</OperandButton>
          <OperandButton>2</OperandButton>
          <OperandButton>3</OperandButton>
          <OperatorButton>+</OperatorButton>
        </div>
        <div className="ButtonRow">
          <OperandButton></OperandButton>
          <OperandButton>0</OperandButton>
          <OperandButton>.</OperandButton>
          <OperatorButton>=</OperatorButton>
        </div>
      </div>
    </div>
  );
};

export default CalculateArea;

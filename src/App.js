// import { TableBody } from "@mui/material";
import React, { useState } from "react";
// import { render } from "react-dom";
import { Modal } from "@react-ui-org/react-ui";
import styles from "./mystyle.css";
import cup_bitmap_lst from "./cupbitmap";
let max_target = 10;
let plus_mode = "ow"; //"up_to_max"; // up_to_max: num1+num2 <= target, o/w: num1<target and num2<target

function shuffleArray(arr) {
  arr.sort(() => Math.random() - 0.5);
}

// Randomize the order of the array so the order of the picture revealed is different
shuffleArray(cup_bitmap_lst);

function DigitBox(props) {
  return <button style={{ fontSize: "150px" }}>{props.digit}</button>;
}

function randomizeNumber(target) {
  return Math.floor(Math.random() * target);
}

function randomizeNumberForPlus(num1, mode, target) {
  if (mode === "up_to_max") {
    return randomizeNumber(target - num1);
  } else {
    return randomizeNumber(target);
  }
}

function cleanForm(setNum1, setNum2, setOper, setAnswer) {
  let num1 = randomizeNumber(max_target);
  let num2; // = randomizeNumber();
  let oper = "+";
  if (Math.random() < 0.5) {
    oper = "-";
    num2 = randomizeNumber(num1);
  } else {
    num2 = randomizeNumberForPlus(num1, plus_mode, max_target);
  }
  setNum1(num1);
  setNum2(num2);
  setOper(oper);
  setAnswer("");
}

function CupElem({ numAnswers }) {
  let num_points_to_show = Math.min(numAnswers * 20, cup_bitmap_lst.length);
  return (
    <p align="center">
      <div style={{ fontSize: "30px" }}>Correct answers: {numAnswers}</div>
      <svg width="200" height="300">
        {cup_bitmap_lst.slice(0, num_points_to_show).map((x) => (
          <circle cx={x[0] * 5} cy={x[1] * 5} r="5" fill={x[2]}></circle>
        ))}
      </svg>
    </p>
  );
}

function onChangeHandler(
  e,
  num1,
  num2,
  oper,
  setAnswer,
  setNum1,
  setNum2,
  setOper,
  setModalOpen,
  numAnswers,
  setNumAnswers
) {
  let real_answer;
  if (oper === "+") {
    real_answer = num1 + num2;
  } else {
    real_answer = num1 - num2;
  }
  let user_answer;
  try {
    user_answer = parseInt(e.target.value, 10);
  } catch (e) {
    return;
  }
  setAnswer(user_answer);
  console.log(real_answer);
  console.log(user_answer);

  if (real_answer === user_answer) {
    setModalOpen(true);
    cleanForm(setNum1, setNum2, setOper, setAnswer);
    setNumAnswers(numAnswers + 1);
  } else if (user_answer.length < real_answer.toString().length) {
    console.log("cont");
  } else {
    console.log("N");
  }
}

function ExerciseBox({
  num1,
  num2,
  oper,
  setNum1,
  setNum2,
  setOper,
  answer,
  setAnswer,
  setModalOpen,
  numAnswers,
  setNumAnswers
}) {
  return (
    <p align="center">
      <DigitBox digit={num1} />
      <DigitBox digit={oper} />
      <DigitBox digit={num2} />
      <DigitBox digit="=" />
      <input
        id="answer"
        type="number"
        value={answer}
        autoFocus
        min="0"
        max="99"
        style={{ fontSize: "150px", width: "300px" }}
        onChange={(event) =>
          onChangeHandler(
            event,
            num1,
            num2,
            oper,
            setAnswer,
            setNum1,
            setNum2,
            setOper,
            setModalOpen,
            numAnswers,
            setNumAnswers
          )
        }
      />
    </p>
  );
}

export default function App() {
  const [num1, setNum1] = useState(randomizeNumber(max_target));
  const [num2, setNum2] = useState(
    randomizeNumberForPlus(num1, plus_mode, max_target)
  );
  const [oper, setOper] = useState("+");
  const [answer, setAnswer] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [numAnswers, setNumAnswers] = useState(0);

  return (
    <div>
      <cupElem numAnswers={numAnswers} />
      <ExerciseBox
        num1={num1}
        num2={num2}
        oper={oper}
        setNum1={setNum1}
        setNum2={setNum2}
        setOper={setOper}
        answer={answer}
        setAnswer={setAnswer}
        setModalOpen={setModalOpen}
        numAnswers={numAnswers}
        setNumAnswers={setNumAnswers}
      />
      <div>
        {modalOpen && (
          <Modal position="top" onClose={() => setModalOpen(false)}>
            <svg
              height="400"
              width="600"
              bgcolor="red"
              style={{ backgroundColor: "pink" }}
            >
              <circle
                id="yellowcircle"
                cx="300"
                cy="200"
                r="150"
                fill="yellow"
              />
              <circle id="blackcircle" cx="250" cy="150" r="20" fill="black" />
              <circle id="blackcircle" cx="350" cy="150" r="20" fill="black" />
              <path
                d="M250,230 Q300,280 350, 230"
                style={{ strokeWidth: "10px", stokeLinecap: "round" }}
              />
            </svg>
          </Modal>
        )}
      </div>
      ;
      <CupElem numAnswers={numAnswers} />;
    </div>
  );
}

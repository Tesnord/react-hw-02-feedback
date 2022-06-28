import React from "react"

export default function Statistics({ state: { good, neutral, bad } }) {
  const total = bad + neutral + good;
  const positive = Math.round(100 - ((bad + neutral) * (100 / total)));
  return (
    <div>
      <span>good: {good}</span>
      <span>neutral: {neutral}</span>
      <span>bad: {bad}</span>
      <span>Total: {total}</span>
      <span>Positive feedback: {positive} %</span>
    </div>
  )
}
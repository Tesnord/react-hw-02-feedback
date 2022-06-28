

export default function Buttons({ state, increment }) {
  const buttons = Object.keys(state).map((button, id) => <button key={id} onClick={increment} name={button} type="button">{button}</button>)
  return (
    <div>
      {buttons}
    </div>
  )
}
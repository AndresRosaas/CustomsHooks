import { FetchApp } from "./components/FetchApp"
import { CounterApp } from "./components/CounterApp"
import { FormsApp } from "./components/FormsApp"


export const HooksApp = () => {
  return (
    <>
        <h1>Proyecto de hooks</h1>
        <hr />
        <FetchApp/>
        <hr />
        <CounterApp/>
        <hr />
        <FormsApp/>
    </>
  )
}//Son hooks hechos para practicar y tenerlos a mano

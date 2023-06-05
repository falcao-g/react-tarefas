import { useEffect, useState } from "react"
import "./style.css"
import CardTarefa from "./components/cardTarefa"

type Tarefa = {
	userId: number
	id: number
	title: string
	completed: boolean
}

export default function App() {
	const [tarefas, setTarefas] = useState<Tarefa[]>([])

	useEffect(() => {
		async function buscarDados() {
			const resultado = await fetch("https://jsonplaceholder.typicode.com/todos")
			const resultadoFinal: Tarefa[] = await resultado.json()
			return resultadoFinal
		}

		buscarDados().then((resultado: Tarefa[]) => {
			setTarefas(resultado)
		})
	}, [])

	return (
		<div className="container">
			<h1>Tarefas</h1>
			<ol className="grid">
				{tarefas.map((tarefa: Tarefa) => {
					return <CardTarefa id={tarefa.id} title={tarefa.title} completed={tarefa.completed} />
				})}
			</ol>
		</div>
	)
}

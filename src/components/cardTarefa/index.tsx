import "./style.css"

type Tarefa = {
	id: number
	title: string
	completed: boolean
}

export default function CardTarefa({ id, title, completed }: Tarefa) {
	return (
		<div className="tarefa">
			<li key={id}>
				{completed ? (
					<>
						<p className="concluida">{title}</p>
						<span className="concluida">Tarefa concluída</span>
					</>
				) : (
					<>
						<p className="nao-concluida">{title}</p>
						<span className="nao-concluida">Tarefa não concluída</span>
					</>
				)}
			</li>
		</div>
	)
}

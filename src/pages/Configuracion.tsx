import Header from "../components/layout/Header"

const Configuracion = ({ title }: { title: string }) => {
	return (
		<div className="flex-1 flex flex-col">
			<Header title={title} />
		</div>
	)
}
export default Configuracion
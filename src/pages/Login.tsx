import Form from "../components/Form";
import Logo from "../components/Logo";

const Login = () => {
	return (
		<div className="bg-neon h-screen">
			<div className="bg-neon min-h-screen flex items-center justify-center p-4">
				<div className="bg-white flex flex-col gap-4 p-6 rounded-xl w-[450px]">
					<Logo size={65} p={4} />
					<h1 className="text-center font-bold text-3xl bg-neon bg-clip-text text-transparent">Music Dashboard</h1>
					<p className="text-center text-gray-500">Gestiona tu música de forma profesional</p>
					<Form />
				</div>
			</div>
		</div>
	)
}

export default Login

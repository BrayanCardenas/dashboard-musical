const Form = () => {
	return (
		<form action="" className="flex flex-col gap-4">
			<label htmlFor="email" className="font-bold">Email</label>
			<input type="email" name="email" id="email" className="border rounded-xl p-2 border-gray-300 text-sm focus:outline-2 focus:outline-offset-2 focus:outline-neonT" placeholder="tu@email.com" />
			<label htmlFor="password" className="font-bold">Password</label>
			<input type="password" name="password" id="password" className="border rounded-xl p-2 border-gray-300 text-sm focus:outline-2 focus:outline-offset-2 focus:outline-neonT" placeholder="••••••••" />
			<button type="submit" className="bg-neon rounded-xl font-bold p-2 cursor-pointer">Iniciar Sesión</button>
		</form>
	)
}

export default Form 
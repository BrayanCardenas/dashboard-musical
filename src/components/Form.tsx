function Form() {
	return (
		<div className="bg-neon min-h-screen flex items-center justify-center p-4">
			<div className="bg-white flex flex-col gap-4 p-6 rounded-xl w-[450px]">
				<div className="flex items-center justify-center">
					<svg className="bg-neon p-4 rounded-2xl " xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M22 16V2L9 5v13" /><circle cx="5" cy="18" r="4" /><circle cx="18" cy="16" r="4" /></g></svg>
				</div>
				<h1 className="text-center font-bold text-3xl bg-neon bg-clip-text text-transparent">Music Dashboard</h1>
				<p className="text-center text-gray-500">Gestiona tu música de forma profesional</p>
				<form action="" className="flex flex-col gap-4">
					<label htmlFor="email" className="font-bold">Email</label>
					<input type="email" name="email" id="email" className="border rounded-xl p-2 border-gray-300 text-sm focus:outline-2 focus:outline-offset-2 focus:outline-neonT" placeholder="tu@email.com" />
					<label htmlFor="password" className="font-bold">Password</label>
					<input type="password" name="password" id="password" className="border rounded-xl p-2 border-gray-300 text-sm focus:outline-2 focus:outline-offset-2 focus:outline-neonT" placeholder="••••••••" />
					<button type="submit" className="bg-neon rounded-xl font-bold p-2 cursor-pointer">Iniciar Sesión</button>
				</form>
			</div>
		</div>
	)
}

export default Form 
const Logo = ({ size, p }: { size: number, p: number }) => {
	return (
		<div className="flex items-center justify-center">
			<svg className={`bg-neon p-${p} rounded-2xl`} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M22 16V2L9 5v13" /><circle cx="5" cy="18" r="4" /><circle cx="18" cy="16" r="4" /></g></svg>
		</div>
	)
}

export default Logo
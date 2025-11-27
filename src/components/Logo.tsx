import { LogoIcon } from "../icons/LogoIcon";

const Logo = ({ size, p }: { size: number, p: number }) => {
	return (
		<div className="flex items-center justify-center">
			<LogoIcon size={size} className={`bg-neon p-${p} rounded-2xl`} />
		</div>
	)
}

export default Logo
const Header = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-between items-center bg-card border-b border-border px-8 py-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-medium">Brayan</p>
          <p className="text-xs text-foreground">Administrador</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-neon flex items-center justify-center font-semibold">B</div>
      </div>
    </div>
  )
}
export default Header
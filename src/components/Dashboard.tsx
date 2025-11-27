import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar";
// import Agenda from "./Agenda";
// import Musicos from "./Musicos";
// import Canciones from "./Canciones";
const Dashboard = () => {
	return (
		<div className="flex h-screen">
			<Sidebar />
			{/* <Agenda title={"Agenda"} /> */}
			{/* <Musicos title={"Músicos"} /> */}
			{/* <Canciones title={"Canciones"} /> */}

			<Outlet />

		</div>

	)
}
export default Dashboard
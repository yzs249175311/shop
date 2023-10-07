import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation.component";

export default function Home() {
  return (
	  <div className="flex flex-col">
      <Navigation></Navigation>
			<div className="p-4">
				<Outlet/>
			</div>
    </div>
  );
}

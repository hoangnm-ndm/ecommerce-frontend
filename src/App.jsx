import "./App.css";
import { AuthProvider } from "./context/AuContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
	return (
		<>
			<AuthProvider>
				<AppRoutes />
			</AuthProvider>
		</>
	);
}

export default App;

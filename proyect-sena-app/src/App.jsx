import AppRouter from './routers/AppRouter'
import './App.css'
import config from './componentes/config'; // Importa la bandera de estado desde config.js
import MaintenancePage from './page/MaintenancePage';


function App() {
	if (config.isMaintenance) {
		return <MaintenancePage />;
	}
	
	return (
		<div>
			<AppRouter />
		</div>
	)
}

export default App

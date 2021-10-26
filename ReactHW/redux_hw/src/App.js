import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserList } from './component/UserList/UserList';
import { Form } from './component/Form/Form';

function App() {
	return (
		<div style={{ width: 900 }}>
			<Form />
			<div style={{ height: 400, width: 850 }}>
				<UserList />
			</div>
			<ToastContainer />
		</div>
	);
}
export default App;
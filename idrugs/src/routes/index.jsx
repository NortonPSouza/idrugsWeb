import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

const Login = lazy(() => import('../modules/login/login'));
const Register = lazy(() => import('../modules/register/register'));

const App = () =>
	<Router>	
		<Suspense fallback={<div>Fazer um loader</div>}>
			<Switch>
				<Route exact path="/" component={Login}/>
				<Route exact path="/register" component={Register}/>
				<Redirect path="*" to="/" />
			</Switch>
		</Suspense>
	</Router>

export default App;

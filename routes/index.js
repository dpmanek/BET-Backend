const usersRoutes = require('./users');
const userDataRoutes = require('./userData');
const publicRoutes = require('./public');

const constructorMethod = (app) => {
	app.use('/users', usersRoutes); // Login/Signup (API)Routes
	app.use('/user/data', userDataRoutes); // verify user and get specific data  Uses Middle Ware to Verify
	app.use('/public', publicRoutes); // No Middle Ware route should display all public Data
	app.get('/', (req, res) => {
		res.status(200).send('Hello server is running').end();
	});
	app.use('*', (req, res) => {
		res.status(404).json({ error: 'Not Found' });
	});
};

module.exports = constructorMethod;

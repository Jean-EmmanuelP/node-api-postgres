const Pool = require('pg').Pool;
const pool = new Pool({
	user: 'me',
	host: 'localhost',
	database: 'api',
	password: 'jean19042001',
	port: 5432,
});

import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import dotenv from 'dotenv';
const config = dotenv.config();
const { API_KEY } = process.env;

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

export default polka()
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: (req, res) => ({
				apikey: API_KEY,
			}),
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});

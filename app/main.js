import { render } from 'react-dom';
import routes from './routes';

const myDiv = document.createElement('div');
document.body.appendChild(myDiv);

render(routes, myDiv);

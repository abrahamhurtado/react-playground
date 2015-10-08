import { Link } from 'react-router';

export default function ({ React }) {
  return function App (props) {
    return {
      render () {
        return (
          <div>
            <h1>UniJOBS</h1>
            <Link to={ '/home' }>Ve al hijo</Link>
            { props.children }
          </div>
        );
      }
    };
  };
}

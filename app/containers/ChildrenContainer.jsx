import ChildrenFactory from '../components/Children';

export default function ({ React }) {
  const Children = ChildrenFactory({ React });

  return function ChildrenContainer (props) {
    return {
      props,
      render () {
        return (
          <Children {...this.props}/>
        );
      }
    };
  };
}

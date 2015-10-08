export default function ({ React }) {
  return function Children (props) {
    return {
      props,
      render () {
        return (
          <h2 {...this.props}>Este es un hijo</h2>
        );
      }
    };
  };
}

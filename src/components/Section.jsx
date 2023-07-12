import PropTypes from 'prop-types';
function Section({ children, title }) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;

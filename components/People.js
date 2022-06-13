import PropTypes from 'prop-types'

function People({ name, age }) {
  return <>{`In 5 years ${name} will be ${age + 5}`}</>
}

People.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}

export default People

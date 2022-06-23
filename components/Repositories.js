import RepoItem from '../components/RepoItem'
import ErrorMessage from '../components/ErrorMessage'
import { StoreContextConsumer } from '../context/store'
import Spinner from '../components/Spinner'

// initial render : null
// array lists
// loading
// empty array

export default function Repositories() {
  return (
    <StoreContextConsumer>
      {({ repositories, loading }) => {
        // console.log('->repositories:', repositories)
        if (loading) {
          return <Spinner />
        }
        if (/Null/.test(Object.prototype.toString.call(repositories))) {
          return null
        }
        if (repositories?.length) {
          return (
            <>
              {repositories.map((i) => (
                <RepoItem item={i} key={i.name} />
              ))}
            </>
          )
        }
        return <ErrorMessage />
      }}
    </StoreContextConsumer>
  )
}

import RepoItem from '../components/RepoItem'
import ErrorMessage from '../components/ErrorMessage'
import { StoreContextConsumer } from '../context/store'
import Spinner from '../components/Spinner'

// initial render : null
// array lists
// loading
// empty array

export default function Repositories() {
  const renderRepositories = (repositories, searchData, loading) => {
    if (repositories?.length) {
      return (
        <>
          {repositories.map((i, index) => (
            <RepoItem
              item={i}
              key={i.name}
              lastElement={index + 1 === repositories.length}
            />
          ))}
        </>
      )
    }
    if (repositories?.length === 0 && searchData.keyword === '') {
      return null
    }
    if (loading) {
      return null
    }
    return <ErrorMessage />
  }

  return (
    <StoreContextConsumer>
      {({ repositories, loading, searchData }) => {
        return (
          <>
            <div>{renderRepositories(repositories, searchData, loading)}</div>
            {loading && <Spinner />}
          </>
        )
      }}
    </StoreContextConsumer>
  )
}

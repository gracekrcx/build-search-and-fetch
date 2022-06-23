import RepoItem from '../components/RepoItem'
import ErrorMessage from '../components/ErrorMessage'
import { StoreContextConsumer } from '../context/store'

export default function Repositories() {
  return (
    <StoreContextConsumer>
      {({ repositories }) => {
        // console.log('->repositories:', repositories) */
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

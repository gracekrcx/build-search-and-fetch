import RepoItem from '../components/RepoItem'
import { StoreContextConsumer } from '../context/store'

export default function Repositories() {
  return (
    <StoreContextConsumer>
      {({ repositories }) => {
        // console.log('->repositories:', repositories) */
        return (
          <>
            {repositories.map((i) => (
              <RepoItem item={i} key={i.name} />
            ))}
          </>
        )
      }}
    </StoreContextConsumer>
  )
}

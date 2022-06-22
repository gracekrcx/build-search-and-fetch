import styled from 'styled-components'
import Tag from '../components/Tag'

const RepoItemContainer = styled.div`
  background-color: #fff;
  padding: 16px;
  margin-top: 8px;
  border-radius: 6px;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: rgba(140, 149, 159, 0.15) 0px 3px 6px 0px;
  }

  .title {
    font-size: 18px;
    color: ${(props) => props.theme.colors.primary};
  }

  .descr {
    font-size: 14px;
    color: #57606a;
    margin-top: 4px;
  }

  .groupTags {
    margin-top: 8px;
  }

  .others {
    font-size: 12px;
    color: #57606a;
    margin-top: 4px;

    .msg {
      margin-right: 16px;
      display: inline-block;
      margin-bottom: 4px;
    }
  }
`

export default function RepoItem({ item }) {
  const titleArr = item.name.split('/')
  return (
    <RepoItemContainer>
      <div className="title">
        {titleArr[0]}/<b>{titleArr[1]}</b>
      </div>
      <div className="descr">{item.desc}</div>
      <div className="groupTags">
        {item.topics.map((i) => (
          <Tag key={i} text={i} />
        ))}
      </div>
      <div className="others">
        <div className="msg">{item.lang}</div>
        <div className="msg">{`★ ${item.star}`}</div>
        <div className="msg">{`${item.issue} issues need help`}</div>
        <div className="msg">{item.license.name}</div>
        <div className="msg">{item.lastUpdate}</div>
      </div>
    </RepoItemContainer>
  )
}

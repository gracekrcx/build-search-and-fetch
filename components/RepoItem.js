import { useCallback, useRef } from 'react'
import styled from 'styled-components'
import Tag from '../components/Tag'
import { useStore } from '../context/store'

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
    overflow-wrap: break-word;
    color: ${(props) => props.theme.colors.primary};
  }

  .descr {
    font-size: 14px;
    color: #57606a;
    margin-top: 4px;
    overflow-wrap: break-word;
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

export default function RepoItem({ item, lastElement = false }) {
  const titleArr = item.name.split('/')
  const { fetchRepositories } = useStore()

  const observer = useRef(null)
  // react 文件：How can I measure a DOM node?
  const lastElementRef = useCallback(
    (node) => {
      // console.log('---> get DOM', node)
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // console.log("entry", entry);
            if (entry.isIntersecting) {
              // console.log('交叉')
              // 只在目標元素進入 viewport 時執行這裡的工作
              fetchRepositories()
            } else {
              console.log('from intersecting to not-intersecting.')
            }
          })
        },
        {
          // rootMargin: '100px',
        }
      )

      if (node) observer.current.observe(node)
    },
    [fetchRepositories]
  )

  return (
    <RepoItemContainer ref={lastElement ? lastElementRef : null}>
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

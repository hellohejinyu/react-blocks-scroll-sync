import React, { PropsWithChildren } from 'react'
import Block from './block'

const getElementChildNodesArr = (node: HTMLElement) => {
  const arr = []
  const count = node.childNodes.length
  for (let i = 0; i < count; i++) {
    if (node.childNodes[i].nodeType === 1) {
      arr.push(node.childNodes[i])
    }
  }
  return arr
}

class Container extends React.PureComponent<PropsWithChildren<any>> {
  static Block = Block
  componentDidMount () {
    const find = Array.from(document.querySelectorAll('.react-scroll-sync-block'))
    if (find.length === 0) {
      console.error('There is no scroll block find!')
      return;
    }

    let latestCount = -1, flag = true;
    find.forEach((el: any) => {
      let count = getElementChildNodesArr(el).length;
      if ((count !== latestCount) && latestCount !== -1) {
        flag = false
      }
      latestCount = count
    })

    if (!flag) {
      console.warn('Every scroll block childrens count shoule be same!If not, this library won\'t work.');
      return
    }

    const scrollFlag = new Array(find.length).fill(false)
    find.forEach((el: any, index) => {
      el.addEventListener('scroll', () => {
        if (!scrollFlag[index]) {
          scrollFlag.fill(true)
          scrollFlag[index] = false
          let _flag = false

          let elArr: any[] = getElementChildNodesArr(el)


          elArr.forEach((_el: any, _index) => {
            let px = _el.offsetTop - el.scrollTop
            if (px > 0 && !_flag && _index > 0) {
              let currNode = elArr[_index - 1]
              let currentOffsetHeight = currNode.offsetHeight

              let otherFind = find.filter((_find, __index) => {
                return __index != index
              })

              otherFind.forEach((_find: any) => {
                let _elArr = getElementChildNodesArr(_find)

                let compareNode = _elArr[_index - 1] as HTMLElement
                let compareOffsetHeight = compareNode.offsetHeight
                let times = compareOffsetHeight / currentOffsetHeight

                let alreadyPx = _elArr.reduce((prev, current, currentIndex) => {
                  if (currentIndex < _index - 1) {
                    let tmpNode = _elArr[currentIndex] as HTMLElement
                    return prev + tmpNode.offsetHeight
                  } else {
                    return prev
                  }
                }, 0)
                let __ = elArr[_index - 1] as HTMLElement
                _find.scrollTop = alreadyPx + times * -(__.offsetTop - el.scrollTop)
              })
              _flag = true
            }
          })

        }
        scrollFlag[index] = false
      })
    })
  }

  render () {
    return this.props.children
  }
}

export default Container

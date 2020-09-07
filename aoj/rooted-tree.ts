import { ssvToNums } from "./common"

export interface NodeInfo {
  value: number
  childrenNumbers: number[]
}

export interface Node {
  parent: Node | undefined
  children: Node[]
  value: number
  depth: number
}

export const lineToNodeInfo = (line: string): NodeInfo => {
  const nums = ssvToNums(line)
  return {
    value: nums[0],
    childrenNumbers: nums.splice(2),
  }
}

export const createRootedTree = (infos: NodeInfo[]): Node[] => {
  const numberToNode = new Array<Node>(100000)

  infos.forEach((nodeInfo) => {
    const curNode: Node = numberToNode[nodeInfo.value] ?? {
      parent: undefined,
      value: nodeInfo.value,
      children: [],
      depth: 0
    }
    curNode.children = nodeInfo.childrenNumbers.map((childNumber) => {
      const child = numberToNode[childNumber] ?? {
        value: childNumber,
        children: [],
        parent: curNode,
        depth: 0
      }
      child.parent = curNode
      numberToNode[childNumber] = child
      return child
    })

    numberToNode[nodeInfo.value] = curNode
  })

  const root = numberToNode.find(n => n.parent == null)

  if (root) {
    const setDepth = (node: Node, depth: number) => {
      node.depth = depth
      node.children.forEach(c => {
        setDepth(c, depth + 1)
      })
    }

    setDepth(root, 0)
  }

  return numberToNode
}

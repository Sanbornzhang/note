const buildTree = ()=>{
  const result = {
    name: 'root',
    value: '1',
    children: [
      {
        name: '1-1',
        value: '1-1',
        children: [
          {
            name: '2-1',
            value: '2-1',
            children: [],
          },
          {
            name: '2-2',
            value: '2-2',
            children: [
              {
                name: '3-1',
                value: '3-1',
                children: [],
              }
            ],
          }
        ],
      },
      {
        name: '1-2',
        value: '1-2',
        children: [],
      },
      {
        name: '1-3',
        value: '1-3',
        children: [],
      }
    ]
  }
  return result
}

const breadthFirst = (tree, value = [])=>{
  if (tree && !(tree instanceof Array)) {
    tree = new Array(tree)
  }
  if (tree && tree.length) {
    tree.forEach((child) => {
      if(child){
        value.push(child.name)
        depthFirst(child.children, value)
      }
    })
  }
  else {
    return value
  }
}
const depthFirst = (tree, value = [])=>{
  if (tree && !(tree instanceof Array)) {
    tree = new Array(tree)
  }
  if (tree && tree.length) {
    tree.forEach((child) => {
      if(child){
        console.log(value)
        value.push(child.name)
        depthFirst(child.children, value)
      }
    })
  }
  else {
    return value
  }
}

console.log(parseTreeJson(buildTree()))
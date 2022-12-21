export function Day07_No_Space_Left_On_Device_Part2(input) {
  const inputs = input.split('\n')

  class Dir {
    content = []
    constructor(name, parent) {
      this.name = name
      this.parent = parent
    }
    getSize() {
      let size = 0
      for (let c of this.content) {
        size += c.getSize()
      }
      return size
    }
    addItem(item) {
      this.content.push(item)
    }
  }

  class File {
    constructor(name, size) {
      this.name = name
      this.size = +size
    }
    getSize() {
      return this.size
    }
  }

  const dirs = []
  dirs.push(new Dir('/', null))
  let currentDir = dirs[0]

  for (let i = 1; i < inputs.length; i++) {
    if (inputs[i].startsWith('$ cd')) {
      let dir = inputs[i].split(' ')[2]
      if (dir !== '..') {
        let newDir = new Dir(dir, currentDir)
        currentDir.addItem(newDir)
        currentDir = newDir
        dirs.push(currentDir)
      } else {
        currentDir = currentDir.parent
      }
    } else if ('0123456789'.includes(inputs[i][0])) {
      let [fileSize, fileName] = inputs[i].split(' ')
      currentDir.addItem(new File(fileName, fileSize))
    }
  }

  let unusedSpace = 70000000 - dirs[0].getSize()
  let diskSpaceNeeded = 30000000 - unusedSpace

  console.log(`Total used disk space: ${dirs[0].getSize()}`)
  console.log(`Unused disk space: ${unusedSpace}`)
  console.log(`Disk space needed for update: ${diskSpaceNeeded}`)

  dirs.sort((a, b) => a.getSize() - b.getSize())

  for (const d of dirs) {
    if (d.getSize() > diskSpaceNeeded) {
      console.log(`Deleting directory: ${d.name} - Size ${d.getSize()}`)
      return d.getSize()
    }
  }
}

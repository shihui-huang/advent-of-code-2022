/**
 *
 * @param {string} input
 * @returns number
 */
export function Day07_No_Space_Left_On_Device_Part1(input) {
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

  let sum = 0
  for (const d of dirs) {
    if (d.getSize() < 100000) {
      sum += d.getSize()
    }
    console.log(`Directory: ${d.name} - Size: ${d.getSize()}`)
  }

  console.log(`Sum of directories with size less than 100000 is ${sum}`)

  return sum
}

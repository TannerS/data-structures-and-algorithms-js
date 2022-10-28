import Node from '../node/Node';

class LinkedList {

  constructor(data = null) {
    this.head = new Node(data);
  }

  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
  }

  append(data) {
    const newNode = new Node(data);
    let runner = this.head;

    while (runner.next != null) {
      runner = runner.next
    }

    runner.next = newNode;
  }



  contains(data) {
    for(let runner = this.head; runner !== null; runner = runner.next) {
      if (runner.data === data) {
        return true;
      }
    }

    return false;
  }

  get(data) {
    for(let runner = this.head; runner !== null; runner = runner.next) {
      if (runner.data === data) {
        return runner.data;
      }
    }
  }

  toString() {
    let result = '';

    for(let runner = this.head; runner !== null; runner = runner.next) {
      result += `${runner.data} `;
    }

    return result.trim();
  }
}

export default LinkedList;
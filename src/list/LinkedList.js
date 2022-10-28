import Node from '../node/Node';

class LinkedList {
  constructor(data = null) {
    this.head = new Node(data);
    this.size = 1;
  }

  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    this.size++;
  }

  append(data) {
    const newNode = new Node(data);

    if (this.size === 0) {
      this.head = newNode;
    } else {
      let runner = this.head;

      while (runner.next != null) {
        runner = runner.next
      }

      runner.next = newNode;
    }

    this.size++;
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

  add(index, data) {
    let runner = this.head;
    let counter = 0;

    if (index === 0) {
      this.prepend(data);
    } else {
      while (runner.next !== null) {
        if (counter + 1 === index) {
          const newNode = new Node(data);
          const temp = runner.next;

          runner.next = newNode
          newNode.next = temp;

          break;
        }

        runner = runner.next;
        counter++;
      }
    }

    this.size++;
  }

  remove(index) {
    if (this.size === 0) {
      throw new Error('List is empty');
    }

    if (this.size < index) {
      throw new Error('Out of bounds');
    }

    let runner = this.head;
    let counter = 0;

    if (index === 0) {
      this.head = this.head.next;
    } else {
      while (runner.next !== null) {
        if (counter + 1 === index) {
          runner.next = runner.next.next;

          break;
        }

        runner = runner.next;
        counter++;
      }
    }

    this.size--;
  }

  getSize() {
    return this.size();
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
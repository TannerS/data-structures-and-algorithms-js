import Node from '../node/Node';

class LinkedList {
  constructor(data = null) {
    this.next = new Node(data);
  }
}

export default Node;
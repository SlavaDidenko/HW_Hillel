class Stack {
  constructor() {
    this.size = 0;
    this.storage = [];
  }

  push(data) {
    this.storage.push(data);
    this.size += 1;
    return this;
  }

  top() {
    return this.storage[this.size - 1]
  }

  pop() {
    if (!this.size) {
      return new Error ('Стек пустий')
    }
    this.storage.pop();
    this.size -= 1;
    return this;
  }

  empty() {
    return this.size == 0;
  }
}
const stack = new Stack();

stack.push('a');
stack.push('b');
stack.push('c');
console.log(stack.top());
console.log(stack.pop())
console.log(stack.empty())





class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  
    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
  
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
  
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  
    return this;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }
  
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }
  
    let currentNode = this.head;
  
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
  
    if (this.tail && this.tail.value === value) {
      this.tail = currentNode;
    }
    return this;
  }

  find(value) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
  
    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  deleteFromTail() {
    if (!this.tail) {
      return null;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
  
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;
  
    return this;
  }


  deleteFromHead() {
    if (!this.head) {
      return null;
    }
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return this;
  }
}

const linkedList = new LinkedList();

linkedList.prepend('a');
linkedList.prepend('a');
linkedList.append('c')
linkedList.prepend('b');
console.log(linkedList.find('a'))
linkedList.deleteFromTail();
linkedList.deleteFromHead()
linkedList.delete('a')
console.log(linkedList)
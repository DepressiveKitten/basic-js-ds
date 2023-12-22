const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor()
  {
    this.top = new ListNode(0);
    this.bottom = this.top;
  }

  getUnderlyingList() {
    return this.top.next;
  }

  enqueue(value ) {
    this.bottom.next = new ListNode(value);
    this.bottom = this.bottom.next;
  }

  dequeue() {
    if(this.top == this.bottom)
    {
      return undefined;
    }
    if(this.top.next == this.bottom)
    {
      let temp = this.bottom;
      this.top.next = null;
      this.bottom = this.top;
      return temp.value;
    }
    let temp = this.top.next.value;
    this.top.next = this.top.next.next;
    return temp;
  }
}

module.exports = {
  Queue
};

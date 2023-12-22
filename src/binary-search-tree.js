const { NotImplementedError, ListNode } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  head = new Node(Infinity);

  root() {
    return this.head.left;
  }

  add(data) {
    let current = this.head;
    while(current!=null)
    {
      if(current.data>data)
      {
        if(current.left == null)
        {
          current.left = new Node(data);
          return current.left;
        }
        current = current.left;
      }
      else if(current.data<data)
      {
        if(current.right == null)
        {
          current.right = new Node(data);
          return current.right;
        }
        current = current.right;
      }
      else
      {
        return current;
      }
    }

    return undefined;
  }

  has(data) {
    let current = this.head;
    while(current!=null)
    {
      if(current.data>data)
      {
        current = current.left;
      }
      else if(current.data<data)
      {
        current = current.right;
      }
      else
      {
        return true;
      }
    }
    return false;
  }

  find(data) {
    let current = this.head;
    while(current!=null)
    {
      if(current.data>data)
      {
        current = current.left;
      }
      else if(current.data<data)
      {
        current = current.right;
      }
      else
      {
        return current;
      }
    }
    return null;
  }

  remove(data) {
    let previous = null; 
    let removing = this.head;
    while(removing!=null)
    {
      if(removing.data>data)
      {
        previous = removing;
        removing = removing.left;
      }
      else if(removing.data<data)
      {
        previous = removing;
        removing = removing.right;
      }
      else
      {
        break;
      }
    }
    if(removing == null)
    {
      return null;
    }

    let change = null;

    if(removing.right == null)
    {
      change = removing.left;
    }
    else if(removing.left == null)
    {
      change = removing.right;
    }
    else
    {
      let current = removing.right;
      let value;
      while(current!=null)
      {
        if(current.left == null)
        {
          value = current.data;
        }
        current = current.left;
      }

      this.remove(value);

      change = new Node(value)
      change.left= removing.left;
      change.right = removing.right;
    }

    if(previous.left == removing)
    {
      previous.left = change;
    }
    else
    {
      previous.right = change;
    }

    return removing;
  }

  min() {
    let current = this.head.left;
    while(current!=null)
    {
      if(current.left == null)
      {
        return current.data;
      }
      current = current.left;
    }
    return null;
  }

  max() {
    let current = this.head.left;
    while(current!=null)
    {
      if(current.right == null)
      {
        return current.data;
      }
      current = current.right;
    }
    return null;
  }
}


module.exports = {
  BinarySearchTree
};
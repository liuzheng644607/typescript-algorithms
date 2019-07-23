import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  /**
   * 首
   */
  public head: LinkedListNode | null = null;

  /**
   * 尾
   */
  public tail: LinkedListNode | null = null;

  /**
   * 追加节点
   */
  public append(value: any): LinkedList {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail!.next = newNode;
    this.tail = newNode;

    return this;
  }

  /**
   * 向前追加
   * @param value 
   */
  public prepend(value: any): LinkedList {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  public delete(value: any): LinkedListNode | null {
    let deleteNode = null;
    while (this.head && this.head.value === value) {
      deleteNode = this.head;
      this.head = deleteNode.next;
    }

    let currentNode = this.head;

    while(currentNode && currentNode.next) {
      if (currentNode.next.value === value) {
        deleteNode = currentNode.next;
        currentNode.next = deleteNode.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    if (this.tail && this.tail.value === value) {
      this.tail = currentNode;
    }

    return deleteNode;
  }

  public forEach(fn: (item: LinkedListNode, i?: number) => void) {
    let currentNode = this.head;
    let i = 0;
    while (currentNode) {
      fn(currentNode, i++);
      currentNode = currentNode.next;
    }
  }
}

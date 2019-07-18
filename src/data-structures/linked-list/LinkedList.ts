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
  public append(value: any) {
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

  public prepend(value: any) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  public delete(value: any) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
  }
}

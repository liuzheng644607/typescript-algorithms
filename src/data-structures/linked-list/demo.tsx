import * as React from 'react';
import LinkedList from './LinkedList';

import './demo.css';

interface IState {
  linkedList: LinkedList;
}

export function Merge(pHead1: any, pHead2: any)
{
    // write code here
    if (pHead1 === null) {
      return pHead2;
    }
    if (pHead2 === null) {
      return pHead1;
    }

    let mergedHead = null;

    if (pHead1.value < pHead2.value) {
      mergedHead = pHead1;
      mergedHead.next = Merge(pHead1.next, pHead2);
    } else {
      mergedHead = pHead2;
      mergedHead.next = Merge(pHead2.next, pHead1);
    }
    // tslint:disable-next-line:no-debugger
    return mergedHead;
}

const a = new LinkedList();
[1, 2, 3, 4, 5, 6, 7, 8].forEach((k) => a.append(k));
const b = new LinkedList();
[1, 3, 5, 6, 7, 9, 10].forEach((k) => b.append(k));

export function reverseNode(head: any) {
  let next = null;
  let pre = null;
  
  while(head) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
}

function reversePrint2(head: any) {
  function reverseInner(head1: any, res: any[] = []) {
      if (head1) {
        reverseInner(head1.next, res);
          res.push(head1.value);
      }
      return res;
  }

  return reverseInner(head, []);
}

const r = reversePrint2(b.head);
// tslint:disable-next-line:no-console
console.log(r);

reverseNode(a.head);

const re = Merge(a.head, b.head);

// tslint:disable-next-line:no-console
console.log(re);

export default class extends React.Component<{}, IState> {

  constructor(props: any) {
    super(props);
    const linkedList = new LinkedList();
    [1, 2, 3, 4, 5, 6, 7, 8].forEach((k) => linkedList.append(k));
  
    this.state = {
      linkedList
    }
  }

  public append = () => {
    const el = document.querySelector('#js-value-append');
    const value = el!.innerHTML;
    if (!value) {
      alert('请输入值');
      return;
    }
    this.state.linkedList.append(value);
    this.setState({
      linkedList: this.state.linkedList,
    });
    // tslint:disable-next-line:no-console
    console.log(this.state.linkedList);
    el!.innerHTML = '';
  }

  public prepend = () => {
    const el = document.querySelector('#js-value-prepend');
    const value = el!.innerHTML;
    if (!value) {
      alert('请输入值');
      return;
    }
    this.state.linkedList.prepend(value);
    this.setState({
      linkedList: this.state.linkedList,
    });
    el!.innerHTML = '';
  }

  public delete = (value: any) => {
    this.state.linkedList.delete(value);
    this.setState({
      linkedList: this.state.linkedList,
    });
  }

  public render() {
    const { linkedList } = this.state;
    const list: JSX.Element[] = [];
    linkedList.forEach((item, i) => {
      list.push(
        <div key={i} className="block-item">
          <div className="item-value">
            {item.value}
          </div>
          <div className="item-next">
            -->
            <span className="icon-delete"
              // tslint:disable-next-line:jsx-no-lambda
              onClick={() => {
                this.delete(item.value)
              }}>
                删除</span>
          </div>
        </div>
      )
    })
    return (
      <div>
        <div className="list-block">
          <div className="block-item btn-add">
            <div className="item-next" onClick={this.prepend}>
              +
            </div>
            <div className="item-value" id="js-value-prepend" contentEditable={true} />
          </div>
          {list}
          <div className="block-item btn-add">
            <div className="item-value" id="js-value-append" contentEditable={true} />
            <div className="item-next" onClick={this.append}>
              +
            </div>
          </div>
        </div>
      </div>
    );
  }
}

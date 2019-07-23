import * as React from 'react';
import LinkedList from './LinkedList';

import './demo.css';

interface IState {
  linkedList: LinkedList;
}

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

import * as React from 'react';
import BinaryTree from './BinaryTree';

export default class extends React.Component {
  public componentDidMount() {
    const root = new BinaryTree();
    [11, 2, 3, 4, 1, 5, 7, 10, 8, 9].forEach((v) => {
      root.insert(v);
    });
    // tslint:disable:no-console
    console.log(root);


    function mirror(a: any) {
      if (a) {
        const tmp = a.left;
        a.left = a.right;
        a.right = tmp;
        mirror(a.left);
        mirror(a.right);
      }

      return a;
    }

    const b = mirror(root.root);
    console.log(b);

    // root.preOrderTraverse((v) => {
    //   console.log(v.value);
    // });

    root.inOrderTraverseNode(root.root, (v) => {
      console.log('in', v.value);
    });

    // root.postOrderTraverseNode(root.root, (v) => {
    //   console.log('post', v.value);
    // });
  }

  public render() {
    return null;
  }
}

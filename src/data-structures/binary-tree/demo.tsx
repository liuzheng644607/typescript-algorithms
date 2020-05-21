import * as React from 'react';
import BinaryTree from './BinaryTree';

export default class extends React.Component {
  public componentDidMount() {
    const root = new BinaryTree();
    [11, 6, 7, 12, 8, 9, 10, 4, 5, 3, 2, 1].forEach((v) => {
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

    function printPath(node: any, result: any[], path: any) {
      path.push(node.value);

      if (node.left === null && node.right === null) {
        result.push(path);
      }

      if (node.left) {
        printPath(node.left, result, path.slice());
      }
      if (node.right) {
        printPath(node.right, result, path.slice());
      }
    }

    function walkPath(node: any) {
      if (!node) {
        return [];
      }
      const result: any = [];
      printPath(node, result, []);
      return result;
    }

    const res = walkPath(root.root);
   
    console.log(root.root);
    console.table(res);
  }

  public render() {
    return null;
  }
}

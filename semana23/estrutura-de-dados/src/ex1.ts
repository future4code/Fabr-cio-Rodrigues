export class LinkedListNode {
  public value: any;
  public next: LinkedListNode | null = null;

  public getData(): any {
      return this.value;
  }

  public getNext(): LinkedListNode | null {
    return this.next;
  }
}

export class LinkedList {
    public start: LinkedListNode | null = null

    public appendToTail(value: any): void {
        const newNode = new LinkedListNode()
        newNode.value = value

        if (this.start === null) {
            this.start = newNode
            return
        } else {

        let node = this.start
        while (node.next !== null) 
            node = node.next
            node.next = newNode
        }
    }

    public print(): void {
        let newNode: LinkedListNode | null = this.start;
        let i = 1;
        while (newNode !== undefined) {
          console.log(`Elemento ${i}: `, newNode!.getData());
          newNode = newNode!.getNext();
        }
    }
}



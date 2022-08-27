// Creates the linked list class
class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 0;
    }

    // Append node to end of list
    append(value) {
        let node = new Node(value);
        let current;

        // If list is empty, make node the head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    // Add node to beginning of list
    prepend(value) {
        let node = new Node(value);

        if (this.head) {
            node.next = this.head;
        }

        this.head = node;

        this.size++;
    }
}

// Creates the node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let list = new LinkedList();

console.log(list);
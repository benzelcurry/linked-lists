// Creates the linked list class
class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.volume = 0;
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

        this.volume++;
    }

    // Add node to beginning of list
    prepend(value) {
        let node = new Node(value);

        if (this.head) {
            node.next = this.head;
        }

        this.head = node;

        this.volume++;
    }

    // Returns the current size of the list
    size() {
        return this.volume;
    }

    // Returns the head of the list
    first() {
        return this.head;
    }

    // Returns the tail of the list
    tail() {
        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        return current;
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
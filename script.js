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

    // Returns the node at a given index
    at(index) {
        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        return current;
    }

    // Removes the last node from the list
    pop() {
        let current = this.head;

        while (current.next.next) {
            current = current.next;
        }

        current.next = null;
        this.volume--;
    }

    // Returns true/false if given value is found in the list
    contains(value) {
        let current = this.head;
        let result = false;

        while (current.next) {
            if (current.value === value) {
                result = true;
            }

            current = current.next;
        }

        return result;
    }

    // Returns the index of the node containing a given value if it's found in list
    find(value) {
        let current = this.head;
        let result = 0;

        while (current) {
            if (current.value === value) {
                return result;
            }

            current = current.next;
            result++;
        }
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
list.append(50);
list.append(100);
list.append(200);
list.append(400);

console.log(list);
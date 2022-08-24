class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    append(value) {
        if (!this.head) {
            this.head = new Node(value)
        } else {
            let node = this.head
            while (node.next != null) {
                node = node.next
            }
            node.next = new Node(value)
        }
    }

    prepend(value) {
        if (!this.head) {
            this.head = new Node(value)
        } else {
            let oldHead = this.head
            this.head = new Node(value)
            this.head.next = oldHead
        }
    }

    size() {
        let size = 0
        let node = this.head
        while (node) {
            size++
            node = node.next
        }
        return size
    }

    getHead() {
        return this.head
    }

    getTail() {
        let node = this.head
        while (node.next) {
            node = node.next
        }
        return node
    }

    at(index) {
        let node = this.head
        for (let i = 1; i < index; i++) {
            node = node.next
        }
        return node
    }

    pop() {
        let node = this.head
        let prevNode
        while (node.next) {
            prevNode = node
            node = node.next
        }
        node.value = null
        prevNode.next = null
    }

    contains(value) {
        let node = this.head
        while (node) {
            if (node.value.value === value) {
                return true
            }
            else {
                node = node.next
            }
        }
        return false
    }

    find(value) {
        let node = this.head
        let index = 1
        while (node) {
            if (node.value.value === value) {
                return index
            }
            else {
                index++
                node = node.next
            }
        }
        return null
    }

    toString() {
        let node = this.head
        while (node) {
            console.log(node.value)
            node = node.next
        }
    }

    insertAt(value, index) {
        let node = this.head
        let prevNode
        for (let i = 1; i < index; i++) {
            prevNode = node
            node = node.next
        }
        let newNode = new Node(value)
        prevNode.next = newNode
        newNode.next = node
    }

    removeAt(index) {
        let node = this.head
        let prevNode
        for (let i = 1; i < index; i++) {
            prevNode = node
            node = node.next
        }
        let nextNode = node.next
        prevNode.next = nextNode
    }
}


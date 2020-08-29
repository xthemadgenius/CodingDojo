// This is the class for our Singly Linked Node
class SLNode {
    // The constructor is built to take 1 parameter; the value of the node we want
    // to create
    constructor(val){
        // The node's actual value being set to the value passed in through the constructor
        this.value = val;
        // And the pointer that refers to the node next in the sequence after
        // this node. Note it starts as null, because when you first create a node,
        // it is not connected to anything.
        this.next = null;
    }
}

// This is the class for our Singly Linked List
class SLList {
    constructor() {
        // The head marks the beginning of the linked list.
        this.head = null;

        // Note that it's null. This is because when you first create a list, it's empty!
    }

    // Write a method that returns a boolean based on whether or not the list
    // is empty. HINT! Check out 
    isEmpty(){
        return this.head === null;

        // Alternatively:
        // if(this.head == null) {
        //      return true;   
        // }
        // else {
        //      return false;
        // }
    }

    // Write a method that will add to the back of a singly linked list.

    // Essentially, have a runner start at the head, traverse along to the end, 
    // then create a new node at the end, and reassign the last node's .next pointer
    // to the new node.
    addToBack(value){
        // First step is going to be checking to see if the singly linked list is empty!

        // Let's use the isEmpty method we wrote!
        if(this.isEmpty()){
            // If this.isEmpty() resolved to true, that means our list has no content!
            // So let's set the head of our list to a new node!
            this.head = new SLNode(value);
            return this;
        }

        // If we're here, then we passed the empty check, and we need to find our way to the
        // end of the current list.

        // To do so, we create a variable and have it hold onto the first
        // node in our SLL
        let runner = this.head;

        // Because we want to get to the end of the list, and not what comes AFTER
        // the end of the list, we want to move runner along until we're AT the last
        // node.
        while(runner.next != null) {
            // If runner.next is not null, we're not quite at the end of the list,
            // so we move runner to its .next 
            runner = runner.next;
        }
        // Since we've broken out of that loop, we must be at the end!
        // Let's take that last node, and reassign its .next pointer to
        // point at a new node instead!
        runner.next = new SLNode(value);

        // And finally, so we can chain methods 
        return this;
    }


    // Write a method for our singly linked list class that will take a value, and
    // add a new node to the front of the current singly linked list.
    addToFront(value) {
        // Step 1: Let's create our new node
        let newNode = new SLNode(value);

        // Step 2: Assign that new node's .next pointer to be the current head of the list
        newNode.next = this.head;

        // Step 3: And reassign the head of the list to now be the new node.
        this.head = newNode;

        // Step 4: Return the list.
        return this;

        // You might be saying "But Cody, what if the list is empty??"

        // It's a good question! But if the list is empty, this.head is null, right?
        // So that means we're still safe to assign the new node's .next to be the head,
        // because Adding to the front of an empty list means the new node will be both
        // the first and last node, so its .next SHOULD be null!
    }

    // Write a method that will remove the head node from the 
    // Singly Linked List.
    removeHead(){
        // If the list is empty, we can't possibly remove anything
        if(this.isEmpty()){
            // So let's let it be known and just return the list.
            console.log("List is already empty.");
            return null;
        }

        // Let's hold onto the current head so we can eventually return it
        let removed = this.head;
        // Set the head to the current head's next node
        this.head = removed.next;
        // Chop off the removed node's .next so we can treat it
        // as a stand-alone node
        removed.next = null;

        // and return it.
        return removed;

    }

    // Write a method that will calculate and return the average
    // of all the node's values in a singly linked list
    average(){
        if(this.isEmpty()){
            console.log("List is empty.");
            return 0;
        }
        // We'll use 2 variables to keep track of the sum and number of nodes
        let sum = 0;
        let count = 0;
        // Let's start our runner at the head of the list
        let runner = this.head;
        // And move it until it's null
        while(runner != null){
            // At each node, we'll add its value to the sum and increment our counter
            sum += runner.value;
            count++;
            // and move the runner down the list
            runner = runner.next;
        }

        // Now that we've touched all of the nodes, lets calculate and return the average.
        return sum / count;
    }

    // Write a method that determines whether or not the linked list contains
    // a node with a given value, and return a boolean based on that
    contains(value){
        // Basically what we want to do here is run through each node
        // and check for a matching value.

        // So let's create our runner
        let runner = this.head;

        while(runner != null) {
            // We'll check if the runner's value matches the value requested
            if(runner.value == value){
                // if they match, the list contains that value!
                return true;
            }
            // Otherwise let's progress down the list
            runner = runner.next;
        }

        // if we checked every node in the list and never found the value,
        // then the list clearly doesn't contain that value.
        return false;

    }

    // Write a method that will remove the last node from the linked list.
    // HINT: Figuring out a way to find the SECOND TO LAST node will be immensely
    // helpful!
    // Return the node. Or the list. Idk, I'm not your dad.
    removeFromBack(){
        // First step: Is the list empty?
        if(this.isEmpty()){
            console.log("List is empty.");
            return null;
        }
        // Second step: Is the list only one element long? 
        // If so, just set the head to null
        else if(this.head.next == null) {
            let temp = this.head;
            this.head = null;
            return temp;
        }
        //If either of those conditions weren't met, let's get down to business
        else {
            // We'll need 2 iterators. Let's call them runner and walker

            // walker will start at the head, and runner at the 2nd node
            let walker = this.head;
            let runner = this.head.next;

            // And let's iterate so that runner reachest the last node,
            // with walker remaining 1 node behind
            while(runner.next != null) {
                // move walker to the runner
                walker = runner;
                // and move runner to the next node
                runner = runner.next;
            }
            // If we've broken out of the loop, then runner is the last node,
            // and walker is the second to last node.

            // Set walker.next to null, which essentially lops runner off 
            walker.next = null;
            // and return the runner (previously the final node)
            return runner;
        }

    }


    // Write a method that will find a node with a given value 
    // and remove it from the linked list.

    // Things to think about: What are your edge cases?

    // HINT: Removing means point the previous node's .next to the
    // current node's .next
    removeVal(value){
        if(this.isEmpty()){
            console.log("List is empty.");
            return this;
        }
        else if(this.head.value == value){
            this.head = this.head.next;
            return this;
        }
        else if(this.head.next == null){
            console.log("List does not contain that value");
            return this;
        }
        else {
            let walker = this.head;
            let runner = this.head.next;
            while(runner != null) {
                if(runner.value == value) {
                    walker.next = runner.next;
                    return this;
                }
                walker = runner;
                runner = runner.next;
            }
            console.log("List does not contain that value");
            return this;
        }   
    }

    // Write a method that will return the second to last node's value
    secondToLast(){
        if(this.isEmpty()){
            console.log("List is empty");
            return null;
        }
        else if(this.head.next == null) {
            return this.head;
        }
        else {
            let runner = this.head.next;
            let walker = this.head;
            while(runner.next != null) {
                walker = runner; 
                runner = runner.next;
            }

            return walker;
        }

    }

    // Write a mathod that takes another linked list as a parameter, and 
    // concatenates it onto the end of the current linked list.
    concat(list){
        if(this.isEmpty()){
            this.head = list.head;
            list.head = null;
            return this;
        }

        let runner = this.head;
        while(runner.next != null) {
            runner = runner.next;
        }
        runner.next = list.head;
        list.head = null;
        return this;
    }

    // Write a method that will create a new node with a given
    // value at position n in our linked list.

    // EXAMPLE: If the list is 5 -> 3 -> 1 -> 8 -> 6 ->
    // and insertAt(2, 4) is called, the returned list would be
    // 5 -> 3 -> 4 -> 1 -> 8 -> 6 ->
    insertAt(n, value){
        if(n < 0) {
            console.log("Please enter a valid position.");
        }
        else if(n == 0) {
            this.addToFront(value);
        }
        else if(this.isEmpty() && n > 0){
            console.log("This list is empty. Please enter a valid position.");
        }
        else {
            let count = 1;
            let runner = this.head;
            while(runner != null) {
                if(count == n){
                    let newNode = new SLNode(value);
                    newNode.next = runner.next;
                    runner.next = newNode;
                    return this;
                }
                count++;
                runner = runner.next;
            }

            console.log("Position out of range.");
        }

        return this;
    }

    // Write a method that will remove all nodes with negative 
    // values from the linked list
    removeNegatives(){
        while(!this.isEmpty() && this.head.value < 0){
            this.head = this.head.next;
        }
        
        if(this.isEmpty()){
            console.log("List is empty.");
            return this;
        }

        let runner = this.head;
        while(runner != null) {
            while(runner.next && runner.next.value < 0){
                runner.next = runner.next.next;
            }
            runner = runner.next;
        }

        return this;
    }

    // Write a method that will reverse a singly linked list.
    
    // HINT: Three runners
    reverse(){
        if(this.isEmpty()){
            console.log("No list to reverse.");
            return this;
        }
        else if(this.head.next == null) {
            return this;
        }
        else {
            let previous = null;
            let runner = this.head;
            let next = runner.next;

            while(runner.next != null) {
                runner.next = previous;
                previous = runner;
                runner = next;
                next = runner.next;
            }

            runner.next = previous;
            this.head = runner;
            return this;
        }
    }

    // Write a method that will determine whether there is a loop in our
    // linked list.
    hasLoop(){
        if(this.isEmpty() || this.head.next == null) {
            return false;
        }
        let count = 0;
        let walker = this.head;
        let runner = this.head.next;
        while(runner != null && runner.next != null) {
            if(walker == runner) {
                this.breakLoop(walker)
                return true;
            }
            walker = walker.next;
            runner = runner.next.next;
        }
        return false;
    }


    // This one is likely going to be the toughest algo of the stack.
    // Write a method that will break a loop in a linked list.
    // You may need to add some extra parameters to this method.

    // This is meant to be a much greater challenge! Please do not just
    // look it up! I'd rather you try and fail than just look up the answer
    breakLoop(lNode){
        let walker = lNode;

        // For this solution it's pretty important that we find out how long the loop is
        let count = 1;
        while(walker.next != lNode){
            walker = walker.next;
            count++;
        }

        let runner = this.head;
        walker = this.head;
        for(let i = 0; i < count; i++){
            runner = runner.next;
        }

        while(walker != runner){
            runner = runner.next;
            walker = walker.next;
        }
        
        while(walker.next != runner){
            walker = walker.next;
        }

        walker.next = null;

        return this;
    }
    

    // Write a method that will remove duplicates from a linked list
    removeDupes(){
        if(this.isEmpty() || this.head.next == null) {
            return this;
        }
        let vals = {};
        vals[this.head.value] = true;
        let walker = this.head;
        let runner = this.head.next;
        while(runner != null) {
            if(vals[runner.value]){
                walker.next = runner.next;
                runner = walker.next;
            }
            else {
                vals[runner.value] = 1;
                walker = runner;
                runner = runner.next;
            }
            
        }
        return this;
    }

    // Write a method that will find the smallest value in a linked list, and move that node to the head of the list.
    moveMinToFront(){
        if(this.isEmpty()){
            return this;
        }
        let min = this.head;
        let minPrev = null;
        let runner = this.head.next;
        while(runner.next != null){
            if(runner.next.value < min.value){
                min = runner.next;
                minPrev = runner;
            }
            runner = runner.next;
        }

        if(min != this.head){
            minPrev.next = min.next;
            min.next = this.head;
            this.head = min;
        }

        return this;
    }

    // Write a method that will split the singly linked list on a given value.

    // EXAMPLE: 5 -> 3 -> 2 -> 8 -> 6 -> 2 ->

    // Calling splitOnVal(8) will make the original list
    // 5 -> 3 -> 2 -> 

    // and return a new list of 8 -> 6 -> 2 -> 
    splitOnVal(val){
        if(this.isEmpty()){
            return null;
        }

        let runner = this.head;

        if(this.head.value == val){
            let newList = new SLList();
            newList.head = this.head;
            this.head = null;
            return newList;
        }

        while(runner.next != null){
            if(runner.next.value == val){
                let newList = new SLList();
                newList.head = runner.next;
                runner.next = null;
                return newList;
            }
            runner = runner.next;
        }

        return null;
    }

    // Write a method that will take a sorted linked list as a parameter, and,
    // assuming the current list is ALSO sorted, merge the two together.

    // EXAMPLE: myList = 1 -> 3 -> 4 -> 7 ->
    // list2 = 2 -> 5 -> 8 ->

    // myList.mergeSorted(list2) returns myList as 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 ->
    mergeSorted(list){
        // If our list is empty, merging basically just means setting the second list's head as this list's head.
        if(this.isEmpty()) {
            this.head = list.head;
            list.head = null;
            return this;
        }
        else if(list.isEmpty()){
            return this;
        }
        
        // What we want to do now is make it so that the current list's head is the smallest element.
        // So to do that, we'll insert the second list's head to the front of this list until
        // that is the case
        while(!list.isEmpty() && list.head.value <= this.head.value){
            let temp = list.removeFromFront();
            temp.next = this.head;
            this.head = temp;
        }

        // If after the previous step, list 2 is empty, we're done here.
        if(list.isEmpty()) {
            return this;
        }

        // Now, let's set up a runner to traverse through this list
        let runner = this.head;
        // And we'll use our previously defined remove from front method to hold onto
        // the first node in the second list.
        let temp = list.removeFromFront();

        // Basically, what we're going to do is find where to insert temp into our list
        while(runner.next != null){
            // Because of the earlier step where we make sure list2's head is not less than 
            // this list's head, we just need to compare temp to runner.next
            if(runner.next.value >= temp.value){
                // If the temp node's value is greater than or equal to the next node's value,
                // insert it in.
                temp.next = runner.next;
                runner.next = temp;
                // Now, we want to pop the front node off of list 2 to repeat this process. 
                // But first we need to make sure there is a front node to remove in the first place.
                if(!list.isEmpty()){
                    temp = list.removeFromFront();
                }
                // If we've emptied list 2, we're done.
                else {
                    return this;
                }
            } 
            // If we did not want to insert temp into our list here, just move it along.
            else {
                runner = runner.next;
            }
        }

        // If we've broken out, we've reached the end of list 1, and temp is still floating around.
        // So let's set the end of list 1's .next to temp
        runner.next = temp;
        // And then, if list 2 is not empty, set temp's .next to list 2's head
        if(!list2.isEmpty()){
            temp.next = list2.head;
        }
    
        return this;
    }

    // BONUS
    mergeKSorted(lists){

    }

    // Here's a gimme: This will print the contents of a singly linked list.
    printList(){
        if(this.isEmpty()){
            console.log("This list is empty");
            return this;
        }

        // We need to initialize an empty string
        let toPrint = "";
        // And start a runner at the head of the list.
        let runner = this.head;

        // We want to perform something every time runner isn't null
        while(runner != null) {
            // Add the new value and an arrow (oh so fancy, I know!)
            // to the string we want to print
            toPrint += `${runner.value} -> `;
            // And move runner to the next node. This is gonna be your 
            // bread and butter when it comes to linked lists
            runner = runner.next;
        }
        // What good is our print list method if it doesn't console log?!
        console.log(toPrint);

        // And just so we can chain methods (idk why you'd want to chain from print list,
        // but why not), just return this.

        return this;
    }
}


let myList = new SLList();
// Code for testing hasLoop with breakloop
// myList.addToBack(1).addToBack(2).addToBack(3).addToBack(4).addToBack(5);
// myList.head.next.next.next.next.next = myList.head.next.next;
// myList.hasLoop();
// myList.printList();

// Code for testing removeDupes
// myList.addToBack(1).addToBack(2).addToBack(3).addToBack(1).addToBack(2).addToBack(2);
// myList.removeDupes();
// myList.printList();

// Code for testing moveMinToFront
// myList.addToBack(10).addToBack(2).addToBack(-1).addToBack(11).addToBack(-5);
// myList.moveMinToFront();
// myList.printList();

// Code for testing splitOnVal
myList.addToBack(10).addToBack(2).addToBack(-1).addToBack(11).addToBack(-5);
myList.splitOnVal(11).printList();
myList.printList();

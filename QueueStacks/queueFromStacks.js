function Queue() {
    let stack = [];
    let stack2 = [];

    function enqueue(elm) {
		if (stack.length === 0) {
			let length = stack2.length;
			for (let i = 0; i < length; i++) {
				stack.push(stack2.pop());
			}

        }

        	stack.push(elm);
	}

	function dequeue(elm) {
		let length = stack.length;
		if (stack2.length === 0) {

			for (let i = 0; i < length; i++) {
				stack2.push(stack.pop());
			}
		}


		return stack2.pop();
	}

	function review() {
		console.log(`Stack one is ${stack}`);
		console.log(`Stack two is ${stack2}`);
	}

    return {
		enqueue,
		dequeue,
		review
	}
};

const q = Queue();

q.enqueue('1')
q.enqueue('2')
q.enqueue('3')
q.enqueue('4')
q.enqueue('5')

for (let i = 1; i <= 5; i++) {

	console.log(q.dequeue());

}

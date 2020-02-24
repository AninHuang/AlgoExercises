// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue { // FIFO Principle
  constructor() {
    this.data = [];
  }

  add(val) {
    // 加入項目至陣列前端 (排隊起點為右側)
    // this.data.unshift(val);

    // 加入項目至陣列末端 (排隊起點為左側)
    this.data.push(val);
  }

  remove() {
    // 移除陣列末端項目
    // return this.data.pop();

    // 移除陣列前端項目
    return this.data.shift();
  }
}

module.exports = Queue;
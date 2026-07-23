/**
 * @param {integer} init
 * @return {Object}
 */
var createCounter = function(init) {
    let current = init;

    return {
        increment: function() {
            current = current + 1;
            return current;
        },
        decrement: function() {
            current = current - 1;
            return current;
        },
        reset: function() {
            current = init;
            return current;
        }
    };
};

const counter = createCounter(10);
console.log(counter.increment());
console.log(counter.reset());   
console.log(counter.decrement()); 
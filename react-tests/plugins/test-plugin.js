module.exports = function (p) {
    var visitor = {
        JSXOpeningElement: function(path, state) {
            const pp = p;
            console.log(1)
        }
    };

    return {
        visitor: visitor
    };
};

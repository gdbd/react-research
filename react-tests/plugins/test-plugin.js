require('colors');

module.exports = function(p) {
  var visitor = {
    JSXOpeningElement: function(path, state) {
      var openingElement = path.container.openingElement;

      var elementName = openingElement.name && openingElement.name.name;
      //|| (openingElement.name.property && openingElement.name.property.name);

     /* openingElement.name.name = openingElement.name.name
        .split("")
        .reverse()
        .join("");

      console.log((
        "plugin found JSX:",
        elementName,
        "and changed to",
        openingElement.name.name).bold.blue
      );*/
    },

    ClassDeclaration: function (path, state) {
      console.log('class'.yellow);
    },
    FunctionDeclaration: function (path, state) {
      console.log('func decl'.yellow);
    },
    FunctionExpression: function (path, state) {
      console.log('func expr'.yellow)
    },
    ArrowFunctionExpression: function (path, state) {
      console.log('arrow'.yellow);
    }
  };

  return {
    visitor: visitor
  };
};

module.exports = function(p) {
  var visitor = {
    JSXOpeningElement: function(path, state) {
      var openingElement = path.container.openingElement;

      var elementName = openingElement.name && openingElement.name.name;
      //|| (openingElement.name.property && openingElement.name.property.name);

      openingElement.name.name = openingElement.name.name
        .split("")
        .reverse()
        .join("");

      console.log(
        "plugin found JSX:",
        elementName,
        "and changed to",
        openingElement.name.name
      );
    }
  };

  return {
    visitor: visitor
  };
};

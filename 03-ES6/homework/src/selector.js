//

var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  return resultSet ;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  let tipoSelector;
  if(selector[0] === '#'){ 
    tipoSelector = 'id';
  }else if(selector[0] === '.'){
    tipoSelector = 'class';
  }else if(selector.includes('.')){
    tipoSelector = 'tag.class';
  }else{
    tipoSelector = 'tag';
  }
  return tipoSelector;
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function(elemento){
      const newSelector = selector.slice(1);
      if(elemento.id === newSelector){
        return true;
      }else{
        return false;
      }
    }
  } else if (selectorType === "class") {
    matchFunction = function(elemento){
      const newSelector = selector.slice(1);
      if(elemento.classList.contains(newSelector)){
        return true;
      }else{
        return false;
      }
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function(elemento){
      const newSelector = selector.split('.');
      if(elemento.tagName.toLowerCase() === newSelector[0] && elemento.classList.contains(newSelector[1])){
        return true;
      }else{
        return false;
      }
    }
  } else if (selectorType === "tag") {
    matchFunction = function(elemento){
      if(elemento.tagName.toLowerCase() === selector){
        return true;
      }else{
        return false;
      }
    }
  }
  return matchFunction;
};


// funcion que recibe un selector del Dom.
var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
//ejemplo de selector que recibe funcion de arriba
$(".clasecualquiera");
$("#idcualquiera");
$("p");
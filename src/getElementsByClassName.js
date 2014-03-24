// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {

	var target 	= document.body //.childNodes;
	//var nodes 	= Array.prototype.slice.call(target);
	var gotem 	= [];

	getElements(target);

	function getElements(node){

		if (node.nodeType === 1) {

			if (node.className.indexOf(className)> -1) {
				gotem.push(node);
				console.log('pushed' + node);
				console.log();
			}

			if (node.hasChildNodes() === true) {
				console.log('child nodes detected');
				var nodes = Array.prototype.slice.call(node.childNodes);
				nodes.forEach(function(e){
					getElements(e);
				})
			};
		}		
	}
	return gotem



	// Crockford Walk the DOM version

	// possible confusion with two 'className'
	
/*	var node 	= document;

	var greens 	= [];


	function walkTheDOM(node, func) {

	    func(node);
	    node = node.firstChild;
	    while (node) {
	        walkTheDOM(node, func);
	        node = node.nextSibling;
	    }
	}

	var func = function () {
		if(node.className === className) {
			greens.push(node)
		}
	}

	walkTheDOM(node, func)

	return greens

*/

/*	====================================
	function walkTheDOM(node, func) {
		
	    func(node);

	    node = node.firstChild;
	    while (node) {
	        walkTheDOM(node, func);
	        node = node.nextSibling;
	    }
	}

	===================================*/

};

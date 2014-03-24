// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	if (obj instanceof Array) {
		return handleArray(obj)
	}
	else if (typeof obj === 'object' && obj !== null) {
		return handleObject(obj)
	}
	else if (typeof obj === 'string') {
		return handleString(obj)
	}
	else { return String(obj) }

	function handleObject (e) {
		var strings = []
		for (prop in e) {
			if (e.hasOwnProperty(prop)){
				//strings.push(handleString(prop) +":"+ obj[prop])
				if (typeof e[prop] !== 'function' && 
					typeof e[prop] !== 'undefined') {
					strings.push(handleString(prop) + ":"+ stringifyJSON(e[prop]))
				};
			}
		}
		return '{' +strings.join(',')+ '}'
	}

	function handleString (string) {
		return '"'+string+'"';
	}
	function handleArray (array) {
		return '[' + array.map(stringifyJSON).join(',') +']'
	}
}
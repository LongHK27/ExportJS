
function Helper() {

	this.utf8_to_b64 = function ( str ) {
	    return btoa(unescape(encodeURIComponent( str )));
	}

	this.b64_to_utf8 = function ( str ) {
	    return decodeURIComponent(escape(atob( str )));
	}
	
	this.hashJavaDJB2 = function(str) {
		let hash = 0;
	    let char_code;
	    if (str === 0) return hash;
	    for (let i = 0, l = str.length; i < l; i++) {
			char_code = str.charCodeAt(i);
			hash = (((hash << 5) + hash) + char_code) >>> 0;
		}
		return hash;
	}

	this.binary_search = function(searchElement, list, minIndex = 0, maxIndex) {
		let obj = {
			result: 0,
			index: 0
		};
		if (!!list && !!list.length) {
			let minIndex = 0;
			let maxIndex = list.length - 1;
			let currentIndex;
			let currentElement;

			while (minIndex <= maxIndex) {
				currentIndex = (minIndex + maxIndex) / 2 | 0;
				currentElement = list[currentIndex];

				if (currentElement < searchElement) {
					minIndex = currentIndex + 1;
				} else if (currentElement > searchElement) {
					maxIndex = currentIndex - 1;
				} else {
					obj.result = 1;
					obj.index = currentIndex;
					return obj;
				}
			}
			obj.index = currentElement < searchElement ? minIndex : currentIndex;
			obj.result = minIndex <= maxIndex ? 1 : 0;
		}

		return obj;
	}

	this.isRowEmpty = function(row) {
		let child   = row.firstChild;
		while ( !!child ) {
			if(!!child.childElementCount) return false;
			child = child.nextSibling;
		}
		return true;
	}

	this.toText      = function(node) {
		let nodeCopy    = jQuery.parseXML(node.outerHTML).firstChild;
		let textReplace = [];
		let nodeText    = node.outerHTML;
		for(let i = 0; i < nodeCopy.attributes.length; i++){
	 		if(!node.attributes.hasOwnProperty(nodeCopy.attributes[i].name)){
				textReplace.push(nodeCopy.attributes[i].name + '="' + nodeCopy.attributes[i].value +'"');
			}
		}
		textReplace.forEach(function(val) {
			nodeText = nodeText.replace(val, '');
		});
		nodeText = nodeText.replace(' >', '>');
		nodeText = nodeText.replace('  ', ' ');

		return nodeText;
	}

	this.getTextOnlyTag = function(tag) {
	    	
		let text = this.toText(tag);
		return {
		start : text.slice(0, text.indexOf('>') + 1),
			end : '</' + tag.nodeName + '>'
		};
	}

}
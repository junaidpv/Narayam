/**
 * Utility functions to get and set the cursor position in content editable divs.
 * Uses rangy library for browser independent range and selection
 * @author Santhosh Thottingal
 * Thanks to Tim Down http://stackoverflow.com/users/96100/tim-down
 * @date 2012-03-26
 * License: GPLv2+
 */

/**
 * Get the current caret position in the div.
 * @param element The content editable div element
 * @return array containing start and end of selection. start and end will be same if there is no selection.
 */

window.getDivCaretPos = function ( element ) {
	var charIndex = 0, start = 0, end = 0, foundStart = false, stop = {};
	var sel = rangy.getSelection(), range;

	function traverseTextNodes( node, range) {
		if ( node.nodeType === 3 ) {
			if ( !foundStart && node === range.startContainer ) {
				start = charIndex + range.startOffset;
				foundStart = true;
			}
			if ( foundStart && node === range.endContainer ) {
				end = charIndex + range.endOffset;
				throw stop;
			}
			charIndex += node.length;
		} else {
			for ( var i = 0, len = node.childNodes.length; i < len; ++i ) {
				traverseTextNodes( node.childNodes[i], range );
			}
		}
	}
	if ( sel.rangeCount ) {
		try {
			traverseTextNodes( element, sel.getRangeAt(0) );
		} catch (ex) {
			if ( ex != stop ) {
				throw ex;
			}
		}
	}

	return [start, end]
}

/**
 * Set the caret position in the div.
 * @param element The content editable div element
 * @param position an object with start and end properties.
 */
window.setDivCaretPos = function ( element , position ) {
	var charIndex = 0, range = rangy.createRange(), foundStart = false, stop = {};
	range.collapseToPoint(element, 0);

	function traverseTextNodes( node ) {
		if ( node.nodeType === 3 ) {
			var nextCharIndex = charIndex + node.length;
			if ( !foundStart && position.start >= charIndex && position.start <= nextCharIndex ) {
				range.setStart( node, position.start - charIndex );
				foundStart = true;
			}
			if ( foundStart && position.end >= charIndex && position.end <= nextCharIndex ) {
				range.setEnd( node, position.end - charIndex );
				throw stop;
			}
			charIndex = nextCharIndex;
		} else {
			for (var i = 0, len = node.childNodes.length; i < len; ++i) {
				traverseTextNodes( node.childNodes[i] );
			}
		}
	}

	try {
		traverseTextNodes( element );
	} catch (ex) {
		if (ex == stop) {
			rangy.getSelection().setSingleRange(range);
		} else {
			throw ex;
		}
	}
}


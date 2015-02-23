var Page = (function() {
	var $container = $( '#containerInterview' ),
		$bookBlock = $( '#bookBlock' ),
		$items = $bookBlock.children(),
		itemsCount = $items.length,
		current = 0,
		bb = $( '#bookBlock' ).bookblock( {
			speed : 800,
			perspective : 2000,
			shadowSides	: 0.8,
			shadowFlip	: 0.4,
			onEndFlip : function(old, page, isLimit) {
				current = page;
				setJSP( 'init' );
				setJSP( 'destroy', old );
			}
		} ),

		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
		supportTransitions = Modernizr.csstransitions;

	function init() {
		setJSP( 'init' );
		initEvents();
	}
	
	function initEvents() {
		$('#page5').bind('mousewheel DOMMouseScroll', function ( e ) {
			var e0 = e.originalEvent,
			delta = -e0.wheelDelta || e0.detail;
		  
			if(delta < 0) {
				bb.prev();
			} else { 
				bb.next();
			}
		  }
		);

		// reinit jScrollPane on window resize
		$( window ).on( 'debouncedresize', function() {
			// reinitialise jScrollPane on the content div
			setJSP( 'reinit' );
		} );
	}

	function setJSP( action, idx ) {
		var idx = idx === undefined ? current : idx,
			$content = $items.eq( idx ).children( 'div.content' ),
			apiJSP = $content.data( 'jsp' );
		
		if( action === 'init' && apiJSP === undefined ) {
			$content.jScrollPane({verticalGutter : 0, hideFocus : true });
		}
		else if( action === 'reinit' && apiJSP !== undefined ) {
			apiJSP.reinitialise();
		}
		else if( action === 'destroy' && apiJSP !== undefined ) {
			apiJSP.destroy();
		}

	}
	return { init : init };
})();
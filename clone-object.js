try{ var base = window; }catch( error ){ var base = exports; }
( function module( base ){
	define( "cloneObject",
		[
		],
		function construct( ){
			var cloneObject = function cloneObject( object ){
				if( typeof object != "object" ){
					throw new Error( "invalid object" );
				}

				var clonedObject = { };
				var value;
				for( var key in object ){
					value = object[ key ];

					if( typeof value == "object" ){
						value = cloneObject( value );
					}

					clonedObject[ key ] = value;
				}

				return clonedObject;
			};

			base.cloneObject = cloneObject;
		} );
} )( base );
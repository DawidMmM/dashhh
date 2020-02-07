import "../css/main.scss";

(() => {
	document.body.addEventListener( 'click', ( { target } ) => {
		const hamburger = document.querySelector( '.hamburger' );
		const dashboard = document.querySelector( '.dashboard' );		

		if( target.matches( '.hamburger, .hamburger *' ) ) {
			dashboard.classList.toggle( 'dashboard_active' );
			hamburger.classList.toggle( 'hamburger_active' );
		} else if( !target.matches( '.dashboard, .dashboard *' ) ) {
			dashboard.classList.remove( 'dashboard_active' );
			hamburger.classList.remove( 'hamburger_active' );
		}

		hamburger.setAttribute( 'aria-expanded', String( hamburger.classList.contains( 'hamburger_active' ) ) );		
	}, false );
})();

class MediaQuery {
	constructor( element, size ) {
		this.element = document.querySelector( element );
		this.mediaQueryList = window.matchMedia( `( ${ size } )` );

		this.mediaQueryList.addListener( this.handleScreenSizeChange.bind( this ) );
	}

	handleScreenSizeChange( e ) {
		if (e.matches) {
			this.element.removeAttribute( 'aria-expanded' );
		} else {
			this.element.setAttribute( 'aria-expanded', String( this.element.classList.contains( 'hamburger_active' ) ) );	
		}
	} 
}

const mediaQuery = new MediaQuery( '.hamburger', 'min-width: 1271px' );

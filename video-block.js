const videoBlockBody = document.querySelector( '.video-block__body' )
const videoBlockHeader = document.querySelector( '.video-block__header' )
const videoBLockDispatchedImage = document.querySelector( '.video-block__cutted-image.video-block__dispatched_top' )

const videoBlockNavigationButtons = document.querySelectorAll( '.video-block__navigation-item' )

videoBlockNavigationButtons.forEach( ( videoBlockNavigationButton ) => {
	videoBlockNavigationButton.addEventListener( 'click', function () {
		clearButtonsClickModificators()
		videoBlockNavigationButton.classList.add( 'video-block__navigation-item_clicked' )
	} )
} )

function isInViewport( element ) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= ( window.innerHeight || document.documentElement.clientHeight ) &&
		rect.right <= ( window.innerWidth || document.documentElement.clientWidth )
	);
}

function clearButtonsClickModificators() {
	videoBlockNavigationButtons.forEach( ( videoBlockNavigationButton ) => {
		videoBlockNavigationButton.classList.remove( 'video-block__navigation-item_clicked' )
	} )
}

window.addEventListener( 'scroll', function ( e ) {
	if ( isInViewport( videoBlockBody ) ) {
		videoBlockHeader.classList.remove( 'video-block__dispatched_top' )
		videoBLockDispatchedImage.classList.remove( 'video-block__dispatched_top' )
	}
} )

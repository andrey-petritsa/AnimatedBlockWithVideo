const videoBlockBody = document.querySelector( '.video-block__body' )
const videoBlockHeader = document.querySelector( '.video-block__header' )
const videoBLockDispatchedImage = document.querySelector( '.video-block__cutted-image.video-block__dispatched_top' )
const videoBlock = document.querySelector( '.video-block' )
const cuttedLeftImage = document.querySelector( '.video-block__cutted-image:first-child' )
const cuttedRightImage = document.querySelector( '.video-block__cutted-image:nth-child(2)' )
const youtubeVideoId = document.querySelector( '.video-block__video-id' ).value
const delayForVideoAppear = 2000
const videoBlockNavigationButtons = document.querySelectorAll( '.video-block__navigation-item' )


player = buildYoutubePlayer()
insertVideoPlayerToBody()


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

function joinVideoBlockToPlayer( event ) {
	if ( isInViewport( videoBlockBody ) ) {
		window.removeEventListener( 'scroll', joinVideoBlockToPlayer )
		videoBlockHeader.classList.remove( 'video-block__dispatched_top' )
		videoBLockDispatchedImage.classList.remove( 'video-block__dispatched_top' )

		setTimeout( deleteImages, delayForVideoAppear )
		setTimeout( showYoutubePlayer, delayForVideoAppear )
	}
}

function buildYoutubePlayer() {
	var player = document.createElement( 'iframe' )
	//<iframe width="560" height="315" src="https://www.youtube.com/embed/4KcMxpXDEi0" title="YouTube video player"
	// frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
	// picture-in-picture" allowfullscreen></iframe>


	player.setAttribute( 'width', videoBlock.clientWidth )
	player.setAttribute( 'height', cuttedLeftImage.offsetHeight )
	player.setAttribute( 'src', `https://www.youtube.com/embed/${youtubeVideoId}` )
	player.style.cssText = 'display: none;'
	return player
}

function insertVideoPlayerToBody() {
	videoBlockBody.appendChild( player )
}

function deleteImages() {
	cuttedLeftImage.remove()
	cuttedRightImage.remove()
}

function showYoutubePlayer() {
	player.style.cssText = 'display: block'
}

window.addEventListener( 'scroll', joinVideoBlockToPlayer )
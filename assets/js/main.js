/* ------------------------------------------------------------------*
 * NAVIGATION
 * ------------------------------------------------------------------*/
var videos = document.getElementsByTagName('video'),
    bullets = document.getElementsByClassName('bullet-dash'),
    $bullets = $(bullets);

$bullets.on('click',function(){

    var $this = $(this),
        hashedId = $this.attr('href'),
        id = hashedId.substr(1);

    // run forrest run!
    goToVideo(id);

    // Show active bullet
    $bullets.removeClass('active');
    $this.addClass('active');

    return false;
});

function goToVideo(id)
{
    var video = document.getElementById(id),
        container = $(video).parent()[0],
        index = 0,
        containerHeight = parseInt(container.style.height); // We want to scroll to the container not the video for proper positioning

    // Locale the position index of our target video
    for(var i = 0; i < videos.length;i++)
    {
        if(videos[i].id === id)
        {
            index = parseInt(i);
            break;
        }
    }

    $(window).scrollTo(containerHeight * index,500);
}

/* ------------------------------------------------------------------*
 * BACKGROUND VIDEO
 * @source https://github.com/linnett/backgroundVideo
 * ------------------------------------------------------------------*/

// Load all video elements via the backgroundVideo object
for(var i=0; i < videos.length;i++)
{
    var source = videos[i].getAttribute('data-src'),
        comment = videos[i].getAttribute('data-comment')
        className = (i === 0) ? '.bv-video' : '.bv-video-'+(i+1); // index '1' is skipped in classname: .bv-video, .bv-video-2, .bv-video-3,...

    new BackgroundVideo(className, {
        src: [source],
        comment: comment,
        onReady: function () {

            // Use onReady() to prevent flickers or force loading state
            const vidParent = document.querySelector(`.${this.bvVideoWrapClass}`);
            vidParent.classList.add('bv-video-wrap--ready');

            if(this.comment)
            {
                $(vidParent).append('<div class="bv-video-comment">'+this.comment+'</div>');
            }
        }
    });
}
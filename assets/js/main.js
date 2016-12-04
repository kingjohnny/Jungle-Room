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
        index = 0,
        videoHeight = parseInt(video.style.height);

    // Locale the position index of our target video
    for(var i = 0; i < videos.length;i++)
    {
        if(videos[i].id === id)
        {
            index = parseInt(i);
            break;
        }
    }

    $(window).scrollTo(videoHeight * index,500);
}

// https://github.com/linnett/backgroundVideo
const backgroundVideo = new BackgroundVideo('.bv-video', {
    src: [
        'assets/video/thrashtheroom_ffw.mp4'
    ],
    onReady: function () {
        // Use onReady() to prevent flickers or force loading state
        const vidParent = document.querySelector(`.${this.bvVideoWrapClass}`);
        vidParent.classList.add('bv-video-wrap--ready');
    }
});
const backgroundVideo2 = new BackgroundVideo('.bv-video-2', {
    src: [
        'assets/video/paintingonthewall_ffw.mp4'
    ],
    onReady: function () {
        // Use onReady() to prevent flickers or force loading state
        const vidParent = document.querySelector(`.${this.bvVideoWrapClass}`);
        vidParent.classList.add('bv-video-wrap--ready');
    }
});
const backgroundVideo3 = new BackgroundVideo('.bv-video-3', {
    src: [
        'assets/video/everybodyhitthefloor_ffw.mp4'
    ],
    onReady: function () {
        // Use onReady() to prevent flickers or force loading state
        const vidParent = document.querySelector(`.${this.bvVideoWrapClass}`);
        vidParent.classList.add('bv-video-wrap--ready');
    }
});
const backgroundVideo4 = new BackgroundVideo('.bv-video-4', {
    src: [
        'assets/video/thetableoftheknights_ffw.mp4'
    ],
    onReady: function () {
        // Use onReady() to prevent flickers or force loading state
        const vidParent = document.querySelector(`.${this.bvVideoWrapClass}`);
        vidParent.classList.add('bv-video-wrap--ready');
    }
});
const backgroundVideo5 = new BackgroundVideo('.bv-video-5', {
    src: [
        'assets/video/endsprint_ffw.mp4'
    ],
    onReady: function () {
        // Use onReady() to prevent flickers or force loading state
        const vidParent = document.querySelector(`.${this.bvVideoWrapClass}`);
        vidParent.classList.add('bv-video-wrap--ready');
    }
});
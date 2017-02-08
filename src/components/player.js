/**
 * Created by Vania on 07.02.2017.
 */

import $ from 'jquery';

function player(band) {
    console.log(band);
    $('.wrapper').append('<audio preload></audio> <ol class="list_songs"></ol>')

    var songs = band.albums[0].songs;

        for (var i = 0; i < songs.length; i++) {
            $('.list_songs').append('<li><a href="#" data-src="src/info/mp3/muse/showbiz/' + songs[i] + '.mp3"></a>' + songs[i] + '</li>');
        }


    // Setup the player to autoplay the next track
    var a = audiojs.createAll({
        trackEnded: function () {
            var next = $('ol li.playing').next();
            if (!next.length) next = $('ol li').first();
            next.addClass('playing').siblings().removeClass('playing');
            audio.load($('a', next).attr('data-src'));
            audio.play();
        }
    });
    // Load in the first track
    var audio = a[0];
    var $olLi = $('ol li');
    var first = $('ol a').attr('data-src');
    $olLi.first().addClass('playing');
    audio.load(first);
    // Load in a track on click
    $olLi.click(function (e) {
        e.preventDefault();
        $(this).addClass('playing').siblings().removeClass('playing');
        audio.load($('a', this).attr('data-src'));
        audio.play();
    });
    // Keyboard shortcuts
    $(document).keydown(function (e) {
        var unicode = e.charCode ? e.charCode : e.keyCode;
        // right arrow
        if (unicode == 39) {
            var next = $('li.playing').next();
            if (!next.length) next = $('ol li').first();
            next.click();
            // back arrow
        } else if (unicode == 37) {
            var prev = $('li.playing').prev();
            if (!prev.length) prev = $('ol li').last();
            prev.click();
            // spacebar
        } else if (unicode == 32) {
            audio.playPause();
        }
    })
}

export {player};
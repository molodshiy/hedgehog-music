/**
 * Created by ivan.datsiv on 2/6/2017.
 */
import $ from 'jquery';
import {bands} from './../index.js';

let sort = (bandsShort1) => {
    let bandsShort = bandsShort1;
    $("select")
        .change(function () {
            let str = "";
            $("select option:selected").each(function () {
                str += $(this).text() + "";
            });

            let sortedName = [];

            switch (str) {
                case 'Name':
                    bandsShort.sort(compareName);
                    writeSortedName();
                    break;

                case 'Year':
                    bandsShort.sort(compareOrigin);
                    writeSortedName();
                    break;

                case 'Rate':
                    bandsShort.sort(compareRate);
                    writeSortedName();
                    break;
            }

            function writeSortedName() {
                bandsShort.forEach(function (s, i) {
                    sortedName[i] = s.name;
                });
            }

            let $listBans = $('.list_bands');

            $listBans.text("");

            for (var j = 0; j < sortedName.length; j++) {
                $listBans.append($('<li>' + sortedName[j] + '</li>'));
            }

            $listBans.children().on('click', showBand);
        })
        .trigger("change");
    return bandsShort;
}

function compareName(a, b) {
    return a.name.localeCompare(b.name);
}

function compareOrigin(a, b) {
    return a.origin - b.origin;
}

function compareRate(a, b) {
    return b.rate - a.rate;
}

function showBand() {
    var bandId = -1;
    var $currentElementBand = $(this);

    $currentElementBand.addClass("active_band")
        .siblings().removeClass("active_band");

    var $currentElementBandName = $currentElementBand.text();

    bands.forEach(function (s) {
        if (s.band_name === $currentElementBandName) {
            bandId = s.id;
            var imgBand = "src/img/" + s.band_photo;
            var classStarRate = "rate" + s.rate;
            $('.img_band').attr("src", imgBand);
            $('.band_name').html(s.band_name);
            $('.rate').removeClass().addClass("rate " + classStarRate);
            $('.about_band_info').html(s.about_band);
            $('.members').html(s.members.join(", "));
            $('.origin').html(s.origin);
            $('.country').html(s.country);
        }
    });

    writeBandAlbums(bandId);
}

function writeBandAlbums(bandId) {
    $('.albums').show();
    let listAlbums = $('.list_albums');
    let albumName = 0;
    listAlbums.text("");
    let albums = bands[bandId - 1].albums;
    albums.forEach(function (s, i) {
        var boxPlayer = $('<div class = "album_hide clearfix"></div>');
        albumName = $('<h3 class="album_name">' + s.name + " - " + albums[i].year + '</h3>');
        var albumLi = $('<li id="album' + i + '"></li>');
        albumLi.append(albumName);
        albumLi.append(boxPlayer);
        $('.list_albums').append(albumLi);
        var albumImgSrc = "src/img/albums/" + albums[i].cover;
        var imgAlbum = '<img class= "album_img" src="' + albumImgSrc + '">';
        boxPlayer.append(imgAlbum);
    });
    listAlbums.children().on('click', changeClassActive);
}

function changeClassActive() {

    $(this).off('click');

    $('.active_album_name').removeClass('active_album_name');
    $(this).children().filter($('.album_name')).addClass('active_album_name');

    $('.album_active').addClass('album_hide')
        .removeClass('album_active');

    $(this).find('.album_hide')
        .removeClass('album_hide')
        .addClass('album_active');

    $('.wrapper').remove();
    $('.album_active').append('<div class="wrapper"></div>');
    player();
}


function player() {
    $('.wrapper').append('<audio preload></audio> <ol class="list_songs"></ol>')

    var songs = bands[0].albums[0].songs;

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


export {sort};
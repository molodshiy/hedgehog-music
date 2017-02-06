/**
 * Created by Vania on 07.02.2017.
 */

import $ from 'jquery';
import {bands} from './../index.js';
import {player} from './player.js';

function showBandAlbums(bandId) {
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


export {showBandAlbums};
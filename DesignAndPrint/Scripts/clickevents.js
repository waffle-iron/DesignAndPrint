﻿$(document).ready(function () {
      window.scrollTo(0,0);
    $('#btnContinueWithPapers').animate({
        opacity: 1
    }, 1500);
});

$('#btnContinueWithPapers').click(function () {
    $(this).animate({
        opacity: 0
    }, 500);
    $('#aChoosePaper').click();
    $('#choose-paper').animate({
        opacity: 1
    }, 500, function () {
        $('#btnContinueWiTemplates').animate({
        opacity: 1
    }, 1500);
    });

});
$('#btnContinueWiTemplates').click(function () {

    $(this).animate({
        opacity: 0
    }, 500);
    $('#aChooseTemplate').show();
    $('#aChooseTemplate').click();
    $('#choose-template').animate({
        opacity: 1
    }, 500, function () {
        $('#btnContinueWithPictures').animate({
        opacity: 1
    }, 1500);
    });
});
$('#btnContinueWithPictures').click(function () {
    $(this).animate({
        opacity: 0
    }, 500);
    $('#aChoosePictures').show();
    $('#aChoosePictures').click();
    $('#choose-image').animate({
        opacity: 1
    }, 500, function () {
        $('#btnFinishAndPrint').animate({
        opacity: 1
    }, 1500);
    });
});
$('#btnFinishAndPrint').click(function () {
    $(this).animate({
        opacity: 0
    }, 500);
    $('#aFinishAndPrint').show();
    $('#aFinishAndPrint').click();
    $('#finishAndPrint').animate({
        opacity: 1
    }, 500);
});

$('#print-button').click(function () {
    $('.btn-add-image').hide();
    $(".box").removeClass("active-box");
    $("#page-for-printing").printElement({ printMode: 'popup' });
});

function AddImageToPlaceHolder(elem) {

    if ($(elem).hasClass('active-box')) {
        return;
    };
    $('.btn-add-image').hide();

    $(".box").removeClass("active-box");
    $(elem).addClass("active-box");


    var attr = $(".active-box").find(".btn-add-image").attr('style');
    console.log(attr);

    if (attr == "display: none;") {
        $('.active-box .btn-add-image').show();
    } else {
        $('.active-box .btn-add-image').hide();
    }

    //$(".active-box .panel-body").html("<a href='#' class='btn btn-default btn-add-image'>Add image to this place </a> ")
};

function TemplateClick(elem) {

    $(".template").removeClass("active-template");
    $(elem).addClass("active-template");

};
$(".papersizes .panel").click(function () {
      $(".papersizes .panel").removeClass("active-paper");
    $(this).addClass("active-paper");
})
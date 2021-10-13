$(document).ready(function() {

    $('.chooseColor input').on('click', function() {
        var motorColor = $(this).attr('pImage');
        $('.active').removeClass('active');
        $('.left-box img[pImage = ' + motorColor + ']').addClass('active');
        $(this).addClass('active');
    });
  
  });
$.fn.cloud_animation = function(imgWidth)
{
    var x = Math.random() * 75;
    var y = Math.random() * 50;
    $(this).animate({left: x, top: y}, 5000, 'linear', function()
    {
        $(this).cloud_animation(imgWidth);
    });

};

$.fn.bus_animation = function(ContainerWidth)
{
    $(this).css({left: -$(this).width()});
    $(this).animate({left: ContainerWidth}, 15000, 'linear', function()
    {
        $(this).bus_animation(ContainerWidth);
    });

};

$.fn.tram_animation = function(ContainerWidth)
{
    $(this).css({left: -$(this).width()});
    $(this).animate({left: ContainerWidth}, 10000, 'linear', function()
    {
        $(this).tram_animation(ContainerWidth);
    });

};
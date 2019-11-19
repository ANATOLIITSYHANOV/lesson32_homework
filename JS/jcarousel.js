$(() => {
    $('.jcarousel').jcarousel({

    });
    $('.jcarousel_prev').jcarouselControl({
      target: '-=1'
    });

    $('.jcarousel_next').jcarouselControl({
      target: '+=1'
    });
    $('.jcarousel').jcarousel({
      wrap: 'circular',
      animation: {
        duration: 700,
        easing: 'linear',
      }
    });

    $('.jcarousel').jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: true
    });
  });
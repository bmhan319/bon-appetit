window.onload = function() {
  if (!window.jQuery){
    return;
  }
  if (jQuery('.homeCityguides__city--desktop').length > 0) {
      var swappers = jQuery('.homeCityguides__city--desktop:nth-child(9),.homeCityguides__city--desktop:nth-child(7),.homeCityguides__city--desktop:nth-child(13)');
      var ldn = jQuery('.homeCityguides__city--desktop:nth-child(7)').clone();
      var mx = jQuery('.homeCityguides__city--desktop:nth-child(9)').clone();
      var pa = jQuery('.homeCityguides__city--desktop:nth-child(13)').clone();
      swappers.remove();
      pa.insertBefore('.homeCityguides__city--desktop:nth-child(1)');
      ldn.insertBefore('.homeCityguides__city--desktop:nth-child(1)');
      mx.insertBefore('.homeCityguides__city--desktop:nth-child(1)');

      var ny = jQuery('.homeCityguides__city--stick').eq(0).clone();
      jQuery('.homeCityguides__city--stick').eq(0).remove();
      ny.insertBefore(jQuery('.homeCityguides__city--stick').eq(6));
  }
  if (jQuery('.page-collection').length > 0 ) {

    var targetBackgrounds = [ // targeting specific collections only
      '.59289209764ac87e78478e26 .cns--sponsorlogo-in-tout'
    ]

    // Since jquery cannot target pseudo elements append class and hide with css
    jQuery(targetBackgrounds.join()).css('background', 'none').addClass('hideSponsoredBefore');
  }
  
  jQuery('.year-2017 .bnr-venue-btn').text('BEST NEW RESTAURANTS 2017');
}

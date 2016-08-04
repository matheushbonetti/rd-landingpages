function parseData(data){
  var rows = data.feed.entry;

  for (var i  = 0; i< rows.length; i++){
    if (rows[i].title["$t"] == window.location.pathname.replace('', '') + '/conversao'){
      var downloadsNumber = rows[i].content["$t"].split(": ")[1];
      $('.rel-offer .card').append('<div class="social-proof"><div class="social-proof-badge"><div class="social-proof-badge-bg"><div class="social-proof-badge-bg-1"></div><div class="social-proof-badge-bg-2"></div><div class="social-proof-badge-bg-3"></div></div><div class="social-proof-badge-text"><div class="social-proof-badge-text-1">0</div><div class="social-proof-badge-text-2">downloads</div></div></div></div>');
      setTimeout(function() {
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator('.')
        $('.social-proof .number').animateNumber({ number: downloadsNumber, numberStep: comma_separator_number_step,  easing: 'easeInOutCirc' }, 3000);
      }, 1000);
    }
  }
}

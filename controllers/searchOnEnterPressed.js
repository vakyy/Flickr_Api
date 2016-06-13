$(function() {
  $('#searchText').keyup(function (e) {
    if (e.which == 13) {
      if ($('#searchText').val()=='') {
        return false;
      }
      if ($('#previouslySearchedText').val()!='') {
        $('.highlighted, .highlightAll').replaceWith($('#previouslySearchedText').val());
      }
      $('.highlighted').attr('class','highlightAll');
      $('#previouslySearchedText').val($('#searchText').val());
      $('.picAuthLinksContainer, .descriptionContainer, .tagsContainer').each(function(event){
        highlight($('#searchText').val(),'highlightAll','s'+$(this).attr('id'), $(this));
      });
      findInPage('','');
      return false;
    }
    else {
      divIdNumbFromWhichToSearch=1;
      $('#findPrevSpan').attr('class', 'hide');
      $('#insteadFindPrevSpan').attr('class', '');
      $('#findNextSpan').attr('class', 'hide');
      if ($('#previouslySearchedText').val()!='') {
        $('.highlighted, .highlightAll').replaceWith($('#previouslySearchedText').val());
      }
      $('html, body').animate({
        scrollLeft: 0
      }, 0);
    }
  });
});
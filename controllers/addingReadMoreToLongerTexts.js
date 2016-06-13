function addingReadMoreToLongerTexts(className,startingFromDiv, max_length) {
    $('.'+className).each(function(event){
        var numbFromId = $(this).attr('id').replace( /^\D+/g, '');
        numbFromId=parseInt(numbFromId);
        if (numbFromId>startingFromDiv) {

            if ($(this).html().length > max_length) {

                var short_content = $(this).html().substr(0, max_length);
                var long_content = $(this).html().substr(max_length);

                $(this).html(short_content +
                    '<a href="#" class="read_more"><br/>Read More</a>' +
                    '<span class="more_text" style="display:none;">' + long_content + '</span>');

                $(this).find('a.read_more').click(function (event) {

                    event.preventDefault();
                    /* prevent the a from changing the url */
                    $(this).hide();
                    /* hide the read more button */
                    $(this).parents('.'+className).find('.more_text').show();
                    /* show the .more_text span */
                });
            }
        }
    });
}
function picsContainersHtmlBuilder(data) {
    var counter=$("#picsCountNumber").val();
    $.each( data.items, function( i, item ) {
        counter++;
        //for Pic Container
        var img=$( "<img>" ).attr( "src", item.media.m );

        //for pic title and author container
        var picLinkText=item.title.split(" ").join(" ");
        if (picLinkText.length>15){
            picLinkText = picLinkText.substring(0,15)+"...";
        }
        else {
            if (picLinkText.length==0||picLinkText==" ") {
                picLinkText="see photo";
            }
        }
        var picLink = $("<a />", {
            href : item.link,
            text : picLinkText,
            target : "_blank"
        });
        var author=item.author.split("(");
        author=author[1].substring(0,author[1].length-1).split(" ").join(" ");
        if (author.length>15) {
            author = author.substring(0,15)+"...";
        }
        else {
            if (author.length==0||author==" ") {
                author="see author";
            }
        }
        var authLink = $("<a />", {
            href : "https://www.flickr.com/people/"+item.author_id,
            text : author,
            target : "_blank"
        });

        //for description container
        var description=item.description;
        description="We have to think for the description because the description " +
            "in the json from flickr is garbage. The description from the json contains" +
            " the picture and the link for the picture and a link for the author and for " +
            "our chosen/given design this is not the correct place for these elements.";
        //for tags contaner
        var tags=item.tags.split(" ").join(", ");
        if (tags.length==0) {
            tags="None"
        }

        $('<div class="wrapperData4OnePic" id="onePicDataContainer'+counter+'" style="display: inline-block; " >' +
            '<div class="picContainer" id="divPic'+counter+'" ><span class="helper"></span></div>' +
            '<div class="picAuthLinksContainer" id="divPicAuthLinks'+counter+'"></div>' +
            '<div class="descriptionContainer" id="divDescr'+counter+'"></div>' +
            '<div class="tagsContainer" id="divTags'+counter+'"></div>').appendTo("#images");
        $(img).appendTo("#divPic"+counter);
        $(picLink).appendTo("#divPicAuthLinks"+counter);
        $("#divPicAuthLinks"+counter).html($("#divPicAuthLinks"+counter).html()+" by ");
        $(authLink).appendTo("#divPicAuthLinks"+counter);
        $("#divDescr"+counter).append(description);
        $("#divTags"+counter).append("Tags: " + tags);
    });
    addingReadMoreToLongerTexts('descriptionContainer',$("#picsCountNumber").val(), 150);
    addingReadMoreToLongerTexts('tagsContainer',$("#picsCountNumber").val(), 150);
    $("#picsCountNumber").val(counter);
    $(window).scroll(function(event) {
        var offset = $('#divPic'+$("#picsCountNumber").val()).offset();
        var w = $(window);
        if((offset.left-w.scrollLeft())<=w.width()) {
            getPics($('#url').val());
            $( this ).off( event );
        }
    });
}
function findInPage(caller,forPredictionOfNextOrPrev) {
    var i;
    if (caller=='prev') {
        if (divIdNumbFromWhichToSearch>2) {
            var startIndex=divIdNumbFromWhichToSearch-2;
            for (i=startIndex;i>0;i--) {
//                    if ($('#divDescr'+i+', #divTags'+i).html().indexOf($("#searchText").val())>0) {
                if ($('#divTags'+i).html().indexOf($("#searchText").val())>0) {
                    if (forPredictionOfNextOrPrev!='doPredict') {
                        divIdNumbFromWhichToSearch=i+1;
                        if (findInPage(caller, 'doPredict')) {
                            //show prev button
                            $("#insteadFindPrevSpan").attr('class', 'hide');
                            $("#findPrevSpan").attr('class', '');
                        }
                        else {
                            //hide prev button
                            $("#findPrevSpan").attr('class', "hide");
                            $("#insteadFindPrevSpan").attr('class', '');
                        }
                        $('#sdivPicAuthLinks'+i+',#sdivDescr'+i+', #sdivTags'+i).attr('class','highlighted');
                        $('html, body').animate({
                            scrollLeft: $("#onePicDataContainer" + i).offset().left - 20
                        }, 400);
                        $("#findNextSpan").attr('class',"");
                    }
                    return true;
                }
                else {
                    if (i==1) {
                        if (forPredictionOfNextOrPrev!='doPredict') {
                            alert('Not found!');
                        }
                        return false;
                    }
                }
            }
        }
        else {
            if (forPredictionOfNextOrPrev!='doPredict') {
                alert('Not found!');
            }
            return false;
        }
    }
    else {
        var startIndex=divIdNumbFromWhichToSearch;
        for (i=startIndex;i<=$("#picsCountNumber").val();i++) {
            if ($('#divTags'+i).html().indexOf($("#searchText").val())>0) {
                if (forPredictionOfNextOrPrev!='doPredict') {
                    divIdNumbFromWhichToSearch=i+1;
                    if (findInPage('', 'doPredict')) {
                        $("#findNextSpan").attr('class', '');
                    }
                    else {
                        $("#findNextSpan").attr('class', 'hide');
                    }
                    if (findInPage('prev', 'doPredict')) {
                        $("#insteadFindPrevSpan").attr('class', 'hide');
                        $("#findPrevSpan").attr('class', '');
                    }
                    else {
                        $("#findPrevSpan").attr('class', 'hide');
                        $('#insteadFindPrevSpan').attr('class', '');
                    }
                }
                if (forPredictionOfNextOrPrev!='doPredict') {
                    $('#sdivPicAuthLinks'+i+',#sdivDescr'+i+', #sdivTags'+i).attr('class','highlighted');
                    $('html, body').animate({
                        scrollLeft: $("#onePicDataContainer"+i).offset().left-20
                    }, 400);
                }
                return true;
            }
            else
            {
                if (i==$("#picsCountNumber").val()) {
                    if (forPredictionOfNextOrPrev!='doPredict') {
                        alert('Not found!');
                    }
                    return false;
                }
            }
        }
    }
}
function highlight(str, className, idName, element)
{
    var regex = new RegExp(str, "g");
    return element.each(function () {
        $(this).contents().filter(function() {
            return this.nodeType == 3 && regex.test(this.nodeValue);
        }).replaceWith(function() {
            return (this.nodeValue || "").replace(regex, function(match) {
                return "<span class='"+className+"' id='"+idName+"'>" + match + "</span>";
            });
        });
    });
}
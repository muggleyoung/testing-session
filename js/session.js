$(function() {
    function generateTag(){
        $("<ul>").attr("id", "tag-cloud").appendTo("#tag-list");

        var keywords = ['点击', '破坏', '黑盒', '白盒', '手动', '自动', '质量', 'QA', 'QC', 'bug', '覆盖率'];
        var list = $('#tag-cloud'); 
        $.each(keywords, function(i)
        {
            var li = $('<li/>')
            .addClass('fragment')
            .text(keywords[i])
            .appendTo(list);
        });

        var listOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        fisherYates(listOrder);

        var liElements = $("#tag-cloud li");
        $.each(liElements, function(i)
        {
            var li = $(liElements[i]),
            freq = listOrder[i];

            li.attr('data-fragment-index', freq)
            .css("font-size", (freq/10 < 3) ?freq/10 + 1.2 + "em": (freq/10 > 7) ? "2.2em" : freq/10 + "em");
        });
    }

    function fisherYates ( myArray ) {
        var i = myArray.length, j, tempi, tempj;
        if ( i === 0 ) return false;
        while ( --i ) {
            j = Math.floor( Math.random() * ( i + 1 ) );
            tempi = myArray[i];
            tempj = myArray[j];
            myArray[i] = tempj;
            myArray[j] = tempi;
        }
    } 
    
    generateTag();
});

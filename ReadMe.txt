functionalities and features:
*. Search functionality completely from scratch.
1. After each searching there is an additional prediction search realizied for hiding prev or next search buttons in order to avoid user clicking on to find previous match or next match of searched text when there is not such occurance.
2. A search realized on Enter pressed in the search textbox.
3. Message "Not found!" when no such tags found in the loaded pictures data.
4. Removing the highlightening from all found tags from previous search when typing in the search TextBox.
5. When search is invoked for first time it finds all occurances in the loaded pictures data and highlithening them in one color set. And the first occuranse is being highlighted in 2nd different color set.
6. When 2nd search with the same text is invoked the previous found selection color set is being highlighted as the 1st highlighted color set and the new found is being highlighted as the 2nd color set.
7. When a search is invoked the scroll is being moved to the container of the picture containing the found tag.

*. Infinite scroll:
1. When on the screen is visible the last photo container, another 20 pics are loaded from flicker with the same getjson ajax.

*. Added icons on buttons and fancy styled with font-awesome css lib.

*. Added functionality to add ReadMore for loner texts for given class and starting position.
1. The "Read More" is added only to the newly loaded items and skipping the ones that already have been "Read More"-ed. :)
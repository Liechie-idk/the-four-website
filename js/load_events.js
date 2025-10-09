function loadItems() {
    
    fetch('js/event_list.txt')
    .then(response => response.text())
    .then(textString => {
        console.log(textString);
        list = textString.split('\n');
        console.log(list.length);
        for(var i; i = (list.length/4); i++)
        {
            var input1 = list[(4*i)+1];
            var input2 = list[(4*i)+2];
            var input3
            var newBox = document.createElement("div");
            newBox.className = "scroll_box-item"
            newBox.innerHTML = '<div class="scroll_box-item-date"' + input1 + '<br> 08 </div><p>Picture Re-Take  Day</p>';
        }
    })
}
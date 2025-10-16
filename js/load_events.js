//This isn't actually used rn as code is in html

const parentBox = document.getElementById("scroll");
console.log(parentBox);
var boxList = [];

fetch('js/event_list.txt')
.then(response => response.text())
.then(textString => {
    // console.log(textString);
    const list = textString.split('\n');
    console.log(list.length);
    for(var i = 0; i < (list.length/4); i++)
    {
        
        var input1 = list[(4*i)];
        var input2 = list[(4*i)+1];
        var input3 = list[(4*i)+2];

        var newBox = '<div class="scroll_box-item"> <div class="scroll_box-item-date"> ' + input1 + ' <br> ' + input2 +' </div> <p>' + input3 + '</p> </div>'
                
        parentBox.innerHTML += newBox;
        console.log(boxList);
    }
})

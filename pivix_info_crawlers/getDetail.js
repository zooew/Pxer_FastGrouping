idlist=[]
for(b in books){
    idlist.push(b);
}
function getbookdetail(dom, id){
    detail = dom.getElementsByClassName("ui-expander-container")[0]
    books[id].detail = detail.innerText;
}
function getDetail(id){
    console.log(books[id]);
    xml = new XMLHttpRequest();
    xml.open("GET",books[id].url,true);
    xml.onload = function (e) {
        if (xml.readyState === 4) {
            if (xml.status === 200) {
                //console.log(xml.responseText);
                bookliskpage=xml.responseText;
                dom = htmlparser(bookliskpage);
                //console.log(dom);
                getbookdetail(dom, id);

            } else {
                console.error(xml.statusText);
            }
        }
        else
        {
            console.log(xml.readyState);
        }
    };
    xml.onerror = function (e) {
        console.error(xml.statusText);
    };
    xml.send(null);
}
var idi = 0;
var myInterval2 = setInterval(function(){getAll(idi);idi++;}, 2000)
function getAll(id)
{
    console.log(id);
    if(id >= idlist.length)
    {
        clearInterval(myInterval2);
        return ;
    }
    getDetail(idlist[id]);

}
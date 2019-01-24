function htmlparser(aHTMLString){
    var dom =document.implementation.createHTMLDocument('');
    dom.documentElement.innerHTML =aHTMLString;
    return dom.body;
}
function getbookinfo(dom){
	list = dom.getElementsByClassName("image-item")
	for(i = 0; i < list.length; i++)
	{
	    item = list[i];
	    item_img = item.getElementsByClassName("work");
 	    item_url = item_img[0].href;
	    item_id = item_url.split("=");
	    item_id = item_id[item_id.length-1];
	    books[item_id] = {};
	    books[item_id].url = item_url;
	    seriestitle = item.getElementsByClassName("_illust-series-title-text");
	    books[item_id].illust_id = item_id;
	    if(seriestitle[0]){ books[item_id].series_title = seriestitle[0].innerText;
	                   }
 	   item_title = item.getElementsByClassName("title")[0];
	    books[item_id].title = item_title.innerText;
	}
}

page_num = 1;
myInterval = setInterval(function(){pageRequest();}, 2000);
page_url = "https://www.pixiv.net/member_illust.php?id=6650545&type=all&p=";
books = {}
function pageRequest()
{
	if(page_num > 5)
	{
		clearInterval();
		return;
	}
	tmp_url = page_url + page_num;
	page_num += 1;
    console.log(tmp_url);
    xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET",tmp_url,true);
    xmlhttp.onload = function (e) {
        if (xmlhttp.readyState === 4) {
            if (xmlhttp.status === 200) {
                //console.log(xmlhttp.responseText);
                bookliskpage=xmlhttp.responseText;
                dom = htmlparser(bookliskpage);
                //console.log(dom);
                getbookinfo(dom);

            } else {
                console.error(xmlhttp.statusText);
            }
        }
        else
        {
        	console.log(xmlhttp.readyState);
        }
    };
    xmlhttp.onerror = function (e) {
        console.error(xmlhttp.statusText);
    };
    xmlhttp.send(null);
}

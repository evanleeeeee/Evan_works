/**
 * Created by Evan on 2017-01-14.
 */
// 定义$函数
function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : id;
}

//标签页切换
window.onload = function () {
    //获取鼠标滑过或点击的标签和要切换内容的标签
    var titles = $('nav-table-link').getElementsByTagName('li'),
        divs = $('works-container').getElementsByClassName('row');
    if (titles.length != divs.length)
        return;
    //遍历titles下的所有li
    for (var i = 0; i < titles.length; i++) {
        titles[i].id = i;
        titles[i].onclick = function () {
            //清除所有li上的class
            for (var j = 0; j < titles.length; j++) {
                titles[j].className = '';
                divs[j].style.display = 'none';
            }
            //设置当前为高亮显示
            this.className = 'nav-table-links-select';
            divs[this.id].style.display = 'block';
        }
    }
}



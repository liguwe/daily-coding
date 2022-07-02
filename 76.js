/*************************************************
 * 实现一个模板引擎
 ************************************************/


var str = `
    <%for ( var i = 0; i < users.length; i++ ) { %>
        <li>
            <a href="<%=users[i].url%>">
                <%=users[i].name%> 
            </a>
        </li>
    <% } %>
`

function tmpl(str, data) {
    //::: with(obj)
    var funStr = "var p = []; with(obj){p.push('" +
        str
            .replace(/[\r\t\n]/g, "")
            .replace(/<%=(.*?)%>/g, "');p.push($1);p.push('")
            .replace(/<%/g, "');")
            .replace(/%>/g, "p.push('")
        + "');}return p.join('');"

    console.log(funStr);
    //:::  new Function([arg1[, arg2[, ...argN]],] functionBody) 构造函数，
    var fn = new Function("obj",funStr);

    console.log(fn.call(this, data))

}

tmpl(str, {
    users: [
        {"name": "Byron", "url": "http://localhost"},
        {"name": "Casper", "url": "http://localhost"},
        {"name": "Frank", "url": "http://localhost"}
    ]
})

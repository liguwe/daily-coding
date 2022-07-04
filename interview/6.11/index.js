/**
 * 播报场景
 *
 * */
var str = `
<p>
  Hello, my name is <%this.name%>. 
  I'm <%this.profile.age%> years old. 
  My skills: 
  <%for(var index in this.skills) {%>
    <a href="#"><%this.skills[index]%></a>
  <%}%>
</p>
`

_ = function (tpl, data) {
    var re = /<%([^%>]+)?%>/g;
    var reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g;
    var match;
    var code = 'var r = [];\n';
    var cursor = 0;

    function add (line, js) {
        js ?
            code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n' :
            code += 'r.push("' + line.replace(/"/g, '\\"') + '");\n';
    }

    while (match = re.exec(tpl)) {
        add(tpl.slice(cursor, match.index));
        add(match[1], true);

        cursor = match.index + match[0].length
    }

    add(tpl.substr(cursor, tpl.length - cursor));
    code += 'return r.join("")';

    return new Function(code.replace(/[\r\t\n]/g, '')).apply(data);
}

console.log(_(str,{
    name: '22Infinite',
    profile: {
        age: 25
    },
    skills:[1,2,3,3,33]
}))
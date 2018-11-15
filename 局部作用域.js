function foo() {
    var sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
        console.log(i);
    }
    // SyntaxError:
    i += 1;
    console.log(i);
}

function getHostAndPath(location) {
    console.log(location);
    var {hostname:domain, pathname:path} = location;
    console.log(domain)
}
var loca = new Object();
loca.hostname = 'https://www.liaoxuefeng.com';
loca.pathname = '/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014344993'
getHostAndPath(loca);
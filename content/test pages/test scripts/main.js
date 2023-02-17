alert('本页面使用cookie！');
var name = 'wenduan'
age = getStart(1, 2, 3);
function getStart(n1, n2, n3) {
  console.log(name)
  console.log(n1 + n2 + n3)
  console.log(arguments)
  var myage = prompt('请输入你的年龄');
  if (myage < 18) {
    alert("你的岁数不满18周岁，请在家长陪同下浏览此网站！");
  } else if (myage > 65) {
    alert("本网站包含激烈内容，请注意身体健康！");
  }
  return myage;
}
import Mock from 'mockjs'

const Random = Mock.Random // 根据占位符用于随机生成字段 (占位符)

export const getUserInfo = options => {
  console.log({ options })
  // return {
  // 	name: 'ruyi' // mock 返回值
  // }
  const template = {
    // mock模板， 7种类型
    // 属性是字符串类型
    'str|2-4': 'ruyi', // 返回的字符串，重复大于等于2次，小于等于4次
    'name|5': 't', // 返回的值重复指定的次数5
    // 属性是数字
    'age|+2': 18, // 初始值为18，每次加2
    'num|4-10': 0, // 会得到大于等于4，小于等于10的数字，0是number类型的任何值都可以
    'float|3-10.2-5': 0, // 会得到整数部分大于等于3，小于等于10，小数部分最少2位，最多5位的随机数，0为任何数值都可以
    // 属性值是布尔类型
    'bool|1': true, // 得到true的概率为二分之一
    'bool2|1-9': true, // 得到true的概率为十分之一，公式是min/(min + max)
    // 属性值是对象
    'obj|2': {
      a: 'aa',
      b: 'bb',
      c: 'cc',
    }, // 从属性值中随机选取2个属性
    'obj2|1-3': {
      a: 'aa',
      b: 'bb',
      c: 'cc',
    }, // 从属性值中随机选取1~3个属性
    // 属性值是数组
    'arr|1': [1, 2, 3], //从数组中随机选取1个元素，作为数组的最终值
    'arr|+1': [1, 2, 3], //从数组中顺序选取1个元素，作为数组的最终值
    'arr|1-3': ['a', 'b', 'v'], // 通过重复属性值生成一个新的数组，最少重复1次，最大重复3次
    // 属性值是函数
    func: () => {
      return 'this is created by function'
    },
    // 属性值是正则表达式
    reg: /[1-9][a-z]/, // 随机生成匹配它的字符串，用于生成自定义格式的字符串
    email: Random.email(), // 随机生成邮箱格式
    // email: Mock.mock('@email'), // 同上
    range: Random.range(3, 10, 2), // 返回的数组，大于等于3，小于等于10，每个值相差2
    date: Random.date('yyyy-MM-dd'), // 返回指定格式的日期
    time: Random.time('hh:mm:ss'), // 返回指定格式的时间
    datatime: Random.datetime('yyyy-MM-dd hh:mm:ss'), // 返回指定格式的日期加时间
    now: Random.now('hour', 'yyyy-MM-dd a hh:mm:ss'), // 返回的是当前时间，参数1为截至的单位，参数2为返回的格式
    date222: Random.date('T'), // 返回时间戳
    img: Random.image('100x220'), // 返回图片地址，参数有尺寸，背景色，文本颜色，图片格式，文本内容
    img_base64: Random.dataImage(), // 返回base64格式的图片，参数有尺寸，文字
    id: Random.id(), // 随机生成id
    color: Random.color(), // 随机颜色
    color2: Random.rgba(), // 随机rgba颜色
    cword: Random.cword('鱼宝宝发达国家阿凡达', 2, 5), // 从第一个参数里面最少取两个，最多取5个
    email2: Random.email('163.com'), // 返回邮箱，参数是域名
    city: Random.city(true), // 返回一个市，参数是一个布尔值，如果是true,连他的上一级也会一起返回
    pick: Random.pick([1, 2, 3, 4]), // 随机返回数组中的某一个
    shuffle: Random.shuffle([1, 2, 3, 4, 5]), // 随机打乱数组的顺序
    fruit: Random.fruit(), // => 'peach' Random的拓展方法
    fruit2: '@fruit', // Random的占位符形式
  }
  let i = 5
  let arr = []
  while (i--) {
    arr.push(template)
  }
  // return Mock.mock(arr) // 得到length为5的数组，age属性值每次加2
  return Mock.mock({
    code: '0',
    success: true,
    msg: 'ok',
    data: template,
  })
}

export const addList = options => {
  console.log({ options })
  const template = {
    // mock模板， 7种类型
    // 属性是字符串类型
    'str|2-4': 'ruyi', // 返回的字符串，重复大于等于2次，小于等于4次
    'name|5': 't', // 返回的值重复指定的次数5
    // 属性是数字
    'age|+2': 18, // 初始值为18，每次加2
    'num|4-10': 0, // 会得到大于等于4，小于等于10的数字，0是number类型的任何值都可以
    'float|3-10.2-5': 0, // 会得到整数部分大于等于3，小于等于10，小数部分最少2位，最多5位的随机数，0为任何数值都可以
    // 属性值是布尔类型
    'bool|1': true, // 得到true的概率为二分之一
    'bool2|1-9': true, // 得到true的概率为十分之一，公式是min/(min + max)
    // 属性值是对象
    'obj|2': {
      a: 'aa',
      b: 'bb',
      c: 'cc',
    }, // 从属性值中随机选取2个属性
    'obj2|1-3': {
      a: 'aa',
      b: 'bb',
      c: 'cc',
    }, // 从属性值中随机选取1~3个属性
    // 属性值是数组
    'arr|1': [1, 2, 3], //从数组中随机选取1个元素，作为数组的最终值
    'arr|+1': [1, 2, 3], //从数组中顺序选取1个元素，作为数组的最终值
    'arr|1-3': ['a', 'b', 'v'], // 通过重复属性值生成一个新的数组，最少重复1次，最大重复3次
    // 属性值是函数
    func: () => {
      return 'this is created by function'
    },
    // 属性值是正则表达式
    reg: /[1-9][a-z]/, // 随机生成匹配它的字符串，用于生成自定义格式的字符串
    email: Random.email(), // 随机生成邮箱格式
    // email: Mock.mock('@email'), // 同上
    range: Random.range(3, 10, 2), // 返回的数组，大于等于3，小于等于10，每个值相差2
    date: Random.date('yyyy-MM-dd'), // 返回指定格式的日期
    time: Random.time('hh:mm:ss'), // 返回指定格式的时间
    datatime: Random.datetime('yyyy-MM-dd hh:mm:ss'), // 返回指定格式的日期加时间
    now: Random.now('hour', 'yyyy-MM-dd a hh:mm:ss'), // 返回的是当前时间，参数1为截至的单位，参数2为返回的格式
    date222: Random.date('T'), // 返回时间戳
    img: Random.image('100x220'), // 返回图片地址，参数有尺寸，背景色，文本颜色，图片格式，文本内容
    img_base64: Random.dataImage(), // 返回base64格式的图片，参数有尺寸，文字
    color: Random.color(), // 随机颜色
    color2: Random.rgba(), // 随机rgba颜色
    cword: Random.cword('鱼宝宝发达国家阿凡达', 2, 5), // 从第一个参数里面最少取两个，最多取5个
    email2: Random.email('163.com'), // 返回邮箱，参数是域名
    city: Random.city(true), // 返回一个市，参数是一个布尔值，如果是true,连他的上一级也会一起返回
    pick: Random.pick([1, 2, 3, 4]), // 随机返回数组中的某一个
    shuffle: Random.shuffle([1, 2, 3, 4, 5]), // 随机打乱数组的顺序
    fruit: Random.fruit(), // => 'peach' Random的拓展方法
    fruit2: '@fruit', // Random的占位符形式
  }
  let i = 5
  let arr = []
  while (i--) {
    arr.push(template)
  }
  return Mock.mock({
    code: '0',
    success: true,
    msg: 'ok',
    data: arr,
  })
}

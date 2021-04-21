# Mock简明文档

## Mock.mock()

- Mock.mock( requestUrl?, requestType?, template|function(options) )
- Mock.mock( template )
- Mock.mock( requestUrl, template )
- Mock.mock( requestUrl, requestType, template )
- Mock.mock( requestUrl, requestType, function(options) )

> requestUrl: 要拦截的URL，字符串或正则表达式<br>
equestType: 要拦截的请求类型，get/post/put/delete/options...<br>
template: 数据模板<br>
function(options)：生成响应数据的函数，options --> { url, type, body }
----

## 语法规范

### 数据模板定义

> 数据模板中每个属性由3部分组成： **属性名|生成规则：属性值**
1. 'name|min-max': value
2. 'name|count': value
3. 'name|min-max.dmin-dmax': value
4. 'name|min-max.dcount': value
5. 'name|count.dmin-dmax': value
6. 'name|count.dcout': value
7. 'name|+step': value

*属性值*中可以包含@占位符
*属性值*还指定了最终值的初始值和类型

#### 1.属性值是字符串

1. 'name|min-max': string
  > 通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max
2. 'name|count': string
  > 通过重复 string 生成一个字符串，重复次数等于 count
#### 2.属性值是数字

1. 'name|+1': number
  > 属性值自动加 1，初始值为 number
2. 'name|min-max': number
  > 生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型
3. 'name|min-max.dmin-dmax': number
  > 生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位
#### 3.属性值是布尔值

1. 'name|1': boolean
  > 随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2
2. 'name|min-max': value
  > 随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)
#### 4.属性值是对象

1. 'name|count': object
  > 从属性值 object 中随机选取 count 个属性
2. 'name|min-max': object
  > 从属性值 object 中随机选取 min 到 max 个属性
#### 5.属性值是数组

1. 'name|1': array
  > 从属性值 array 中随机选取 1 个元素，作为最终值
2. 'name|+1': array
  > 从属性值 array 中顺序选取 1 个元素，作为最终值
3. 'name|min-max': array
  > 通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max
4. 'name|count': array
  > 通过重复属性值 array 生成一个新数组，重复次数为 count
#### 6.属性值是函数

1. 'name': function
  > 执行函数 function，取其返回值作为最终的属性值，函数的上下文为属性 'name' 所在的对象
#### 7.属性值是正则表达式

1. 'name': regexp
  > 根据正则表达式 regexp 反向生成可以匹配它的字符串。用于生成自定义格式的字符串
### 数据占位符定义

1. 用 @ 来标识其后的字符串是 占位符
2. 占位符 引用的是 Mock.Random 中的方法
3. 通过 Mock.Random.extend() 来扩展自定义占位符
4. 占位符 也可以引用 数据模板 中的属性
5. 占位符 会优先引用 数据模板 中的属性
6. 占位符 支持 相对路径 和 绝对路径

----

## Mock.setup()

> 配置Ajax请求的行为，暂时支持的配置项有timeout
```javascript
  Mock.setup({
    timeout: 500
  })
  Mock.setup({
    timeout: '100-600'
  })
```

----

## Mock.Random

```javascript
  const Random = Mock.Random
  Random.email() // => sd.sdf@oksd.com
  Mock.mock('@email') // => sd.sdf@oksd.com
  Mock.mock({ email: 'sd.sdf@oksd.com' }) // => { email: "sd.sdf@oksd.com" }
```

### Mock.Random提供的完整方法（占位符）:

Type | Method
:------- | :-------
Basic | boolean, natural, integer, float, character, string, range, date, time, datetime, now
Image | image, dataImage
Color | color
Text | paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle
Name | first, last, name, cfirst, clast, cname
Web | url, domain, email, ip, tld
Address | area(region, province, city(bool), county(bool), zip), region
Helper | capitalize(首字母大写), upper(大写), lower(小写), pick(从数组任取一个), shuffle(打乱数组元素顺序)
Miscellaneous | guid, id

#### Basic

1. Random.boolean(min?, max?, current? ) // 布尔值
2. Random.natural(min?, max? ) // 自然数
3. Random.integer(min?, max? ) // 整数
4. Random.float( min?, max?, dmin?, dmax? ) // 浮点数
5. Random.character( pool? ) // pool => lower/upper/number/symbol // 字符串，包括大小写，数字，特殊字符
6. Random.string( pool?, min?, max? ) // pool => lower/upper/number/symbol //同上
7. Random.range( start?, stop, step? ) // 返回数组

#### Date

1. Random.date( format? )

Format | Description | Example
:---- | :---- | :----
yyyy | A full numeric representation of a year, 4 digits | 1999 or 2003
yy | A two digit representation of a year | 99 or 03
y | A two digit representation of a year | 99 or 03
MM | Numeric representation of a month, with leading zeros | 01 to 12
M | Numeric representation of a month, without leading zeros | 1 to 12
dd | Day of the month, 2 digits with leading zeros | 01 to 31
d | Day of the month without leading zeros | 1 to 31
HH | 24-hour format of an hour with leading zeros | 00 to 23
H | 24-hour format of an hour without leading zeros | 0 to 23
hh | 12-hour format of an hour without leading zeros | 01 to 12
h | 12-hour format of an hour with leading zeros | 1 to 12
mm | Minutes, with leading zeros | 00 to 59
m | Minutes, without leading zeros | 0 to 59
ss | Seconds, with leading zeros | 00 to 59
s | Seconds, without leading zeros | 0 to 59
SS | Milliseconds, with leading zeros | 000 to 999
S | Milliseconds, without leading zeros | 0 to 999
A | Uppercase Ante meridiem and Post meridiem | AM or PM
a | Lowercase Ante meridiem and Post meridiem | am or pm
T | Milliseconds, since 1970-1-1 00:00:00 UTC | 759883437303

2. Random.time( format? )
3. Random.datetime( format? )
4. Random.now( unit?, format? ) // unit => year、month、week、day、hour、minute、second、week

#### Image

##### Random.image()

1. Random.image()
2. Random.image( size )
3. Random.image( size, background )
4. Random.image( size, background, text )
5. Random.image( size, background, foreground, text )
6. Random.image( size, background, foreground, format, text )

##### Random.dataImage()

1. Random.dataImage()
2. Random.dataImage( size )
3. Random.dataImage( size, text )

#### Color

1. Random.color() // => #3538B2
2. Random.hex() // => #3538B2
3. Random.rgb() // => rgb(242, 198, 121)
4. Random.rgba() // => rgba(242, 198, 121, 0.13)
5. Random.hsl() // => hsl(345, 82, 71)

#### Text

1. Random.paragraph( min?, max? ) // 英文段落，最少几句，最多几句
2. Random.cparagraph( min?, max? ) // 中文段落
3. Random.sentence( min?, max? ) // 英文句子，最少几个单词，最多几个单词
4. Random.csentence( min?, max? ) // 中文句子
5. Random.word( min?, max? ) // 单词
6. Random.cword( pool?, min?, max? ) // 汉字
7. Random.title( min?, max? )	 // 英文标题
8. Random.ctitle( min?, max? ) //中文标题

#### Name

1. Random.first() // 英文名的名
2. Random.last() // 英文名的姓
3. Random.name( middle? ) // 英文名字
4. Random.cfirst() // 中文名的姓
5. Random.clast() // 中文名的名
6. Random.cname() // 中文名

#### Web

1. Random.url( protocol?, host? ) // 返回Url,第一个参数是https或者http，第二个是host
2. Random.protocol() // 返回一个协议
3. Random.domain() // 域名
4. Random.tld() // 顶级域名
5. Random.email( domain? ) // 返回邮箱，参数是域名
6. Random.ip() // 返回一个Ip地址

#### Address

1. Random.region() // 返回一个中国的大区
2. Random.province() // 返回一个省份
3. Random.city( prefix? ) // 返回一个市，参数是一个布尔值，如果是true,连他的上一级也会一起返回
4. Random.county( prefix? ) // 返回一个镇，参数是一个布尔值，如果是true,会连带上省和市两级一起返回
5. Random.zip() // 返回一个邮政编码

#### Helper

// 一些方法
1. Random.capitalize( word ) // 参数是一个单词，会把首字母大写
2. Random.upper( str ) // 把所有单词变大写
3. Random.lower( str ) // 把所有单词变小写
4. Random.pick( arr ) // 从数组中任意抽一个元素
5. Random.shuffle( arr ) // 把数组的顺序打乱

#### Miscellaneous

1. Random.guid() // 返回一长串的guid
2. Random.id() // 返回18位身份证号码
3. Random.increment( step? ) // 生成一个全局的自增Id,用于一个全局的索引号

----

### 扩展

```javascript
Random.extend({
  fruit () {
    const fruit = ['apple', 'peach', 'lemon']
    return this.pick(fruit)
  }
})
Random.fruit() // => 'peach'
Mock.mock('@fruit')  // => 'lemon'
Mock.mock({
  fruit: '@fruit' // => 'peach'
})
```

### Mock.valid()

#### Mock.valid( template, data ) // 传入参数模板和数据 ，返回传入的数据是否符合模板的规则

### Mock.toJSONSchema()

#### Mock.toJSONSchema( template ) // 可以把模板转换成一个JSONSchema的格式
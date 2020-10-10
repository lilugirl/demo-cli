#! /usr/bin/env node
var program=require('commander');
const inquirer=require('inquirer');
const promptList=[
  {
      type:'input',
      message:'设置一个用户名：',
      name:'name',
      default:'test_user' //默认值
  },{
      type:'input',
      message:'请输入手机号码：',
      name:'phone',
      validate:function(val){
          if(val.match(/\d{11}/g)){  //校验位数
            return true;
          }
          return "请输入11位数字"
      }
  },
  {
      type:'confirm',
      message:"是否使用监听?",
      name:"watch",
      prefix:"前缀"
  },{
      type:'confirm',
      message:"是否进行文件过滤",
      name:'filter',
      suffix:"后缀",
      when:function(answers){
          return answers.watch
      }
  },{
      type:'list',
      message:"请选择一种水果：",
      name:"fruit",
      choices:["Applie","Pear","Banana"],
      filter:function(val){
          // 使用filter将回答变为小写
          return val.toLowerCase()
      }
  },{
      type:'rawlist',
      message:'请选择一种水果：',
      name:'fruit2',
      choices:["Apple","Pear","Banana"]
  },{
      type:'expand',
      message:'请选择一种水果',
      name:'fruit3',
      choices:[
          {
              key:'a',
              name:'Apple',
              value:'apple'
          },
          {
             key:'o',
             name:'Orange',
             value:'orange'
          },
          {
              key:'p',
              name:'Pear',
              value:'pear'
          }
      ]
  },
  {
      type:'checkbox',
      message:'选择颜色',
      name:'color',
      choices:[{
          name:'red'
      },
      new inquirer.Separator(), // 添加分隔符
      {
          name:'blue',
          checked:true //默认选中
      },{
          name:'green'
      },
      new inquirer.Separator('--------------分隔符-----------------'),// 自定义分隔符
      {
          name:'yellow'
      }
    ]

  },
  {
      type:'checkbox',
      message:'选择颜色',
      name:'color2',
      choices:[
          "red","blur","green","yellow"
      ],
      pageSize:2 //设置行数
  },{
      type:'password', //密码为密文输入
      message:'请输入密码:',
      name:'pwd'
  },{
      type:'editor',
      message:'请输入备注：',
      name:'editor'
  }
];
inquirer.prompt(promptList).then(answers=>{
    console.log(answers)  //返回的结果
})
// program
// .version('0.1.0')
// .option('-C, --chdir <path>','change the working directory')
// .option('-c, --config <path>','set config path. defaults to ./delopy.conf')
// .option('-T, --no-tests','ignore test hook');

// program
// .command('setup [env]')
// .description('run setup commands for all envs')
// .option("-s, --setup_mode [mode]","Which setup mode to use")
// .action(function(env,options){
//     var mode=options.setup_mode || "normal";
//     env =env || 'all';
//     console.log('setup for %s env(s) with %s mode',env,mode)
// });

// program
// .command("*")
// .action(function(env){
//     console.log('delopying "%s"',env);
// });
// program.parse(process.argv);

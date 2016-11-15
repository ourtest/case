	//通过构造函数创建对象完成tab栏，传入一个对象给构造函数，需要两个盒子的id以及是否自动播放控制属性
	//传入的obj={
//		tabMeun: xxx,
//		tabMain:xxx,
//		auto:true / false
//	}
	//就是说你要是想用我的方法 你就要传递一个包含我定义的obj的所有属性的对象  你要是随便乱改名字那么拜拜
	function Tab (obj) {
		//这两个属性是上下两个盒子的子元素集合
		this.menus = null;
		this.mains = null;
		if(obj){
			this._init(obj);
		}
	}
	Tab.prototype={
		constructor:Tab,
		_init:function  (obj) {
			this.elements(obj);
			this.events();
			if(obj.auto){
				this.autoplay();
			}
		},
		elements:function  (obj) {
			var a = document.getElementById(obj.tabMenu);
			var b = document.getElementById(obj.tabMain);
			//重新设置构造函数属性的值，即tab栏操作需要的节点
			this.menus =a.children;
			this.mains=b.children;
		},
		events:function  () {
			//为tab栏的上边标题栏绑定点击事件
			for (var i=0;i<this.menus.length;i++) {
				var that=this;
				//为tab栏标题栏绑定属性 方便对应操作对应的显示内容
				this.menus[i].index = i;
				this.menus[i].onclick=function () {
					//排他思想清除样式并给指定的添加样式，需要把绑定事件的元素传到下面的执行函数中;对应下边代码中的this
					//而在事件绑定函数中this表示的是事件目标对象，即绑定事件的元素；对应下边代码中的this
					//这里需要调用构造函数的内置方法 需要把该对象传进绑定事件函数中  即上边定义的that
					that.change(this);
				}
				
			}
		},
		change:function  (ele) {
			//形参表示当前要设置样式的节点
			//排他思想
			for (var i=0;i<this.menus.length;i++) {
				this.menus[i].className = 'tab-item';
				this.mains[i].style.display = 'none';
			}
			//设置当前标题栏和对应显示区域
			ele.className = 'tab-item active';
			this.mains[ele.index].style.display = 'block';
		},
		autoplay:function  () {
			var that=this;
			//index 不能定义到其他位置 用来记录当前位置
			var index=0;
			setInterval(function  () {
				index++;
				//定时器是直接调用的函数 类似于fn（）；this指的是window
				if(index==that.menus 	.length){
					index=0;
				}
				that.change(that.menus[index])
			},2000)
		}
		
		
	}

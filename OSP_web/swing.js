		var s = Snap.select("#swingLarge");


		
		var mid = 200;
		var radius = 20;
		var topLine = s.line(mid-5*radius, 50, mid+5*radius, 50);
		topLine.attr({
			stroke: "#111",
			strokeWidth: 8
		});
		var l1 = s.line(mid-radius*4-14, 50, mid-radius*4-14, 250);
		l1.attr({
			stroke: "#111",
			strokeWidth: 8
		});
		var b1 = s.circle(mid-radius*4-14, 250, radius);
		b1.attr({
			fill: "#FFF",
			stroke: "#111",
			strokeWidth: 8
		});
		var l2 = s.line(mid-radius*2-7, 50, mid-radius*2-7, 250);
		l2.attr({
			stroke: "#111",
			strokeWidth: 8
		});
		var b2 = s.circle(mid-radius*2-7, 250, radius);
		b2.attr({
			fill: "#FFF",
			stroke: "#111",
			strokeWidth: 8
		});
		var l3 = s.line(mid, 50, mid, 250);
		l3.attr({
			stroke: "#111",
			strokeWidth: 8
		});
		var b3 = s.circle(mid, 250, radius);
		b3.attr({
			fill: "#FFF",
			stroke: "#111",
			strokeWidth: 8
		});
		var l4 = s.line(mid+radius*2+7, 50, mid+radius*2+7, 250);
		l4.attr({
			stroke: "#111",
			strokeWidth: 8
		});
		var b4 = s.circle(mid+radius*2+7, 250, radius);
		b4.attr({
			fill: "#FFF",
			stroke: "#111",
			strokeWidth: 8
		});
		var l5 = s.line(mid+radius*4+14, 50, mid+radius*4+14, 250);
		l5.attr({
			stroke: "#111",
			strokeWidth: 8
		});
		var b5 = s.circle(mid+radius*4+14, 250, radius);
		b5.attr({
			fill: "#FFF",
			stroke: "#111",
			strokeWidth: 8
		});

		var g1 = s.group(l1,b1);
		var g5 = s.group(l5,b5);
		leftforward();
		function leftforward(){
			g1.stop().animate(
				{transform: 'r20, 104 50'},
				500,mina.easein,
				function(){
					g1.attr({transform: 'rotate(20 104 50)'});
					leftback();
				});
		}
		function leftback(){
			g1.stop().animate(
				{transform: 'r0, 104, 50'},
				500,mina.easeout,
				function(){
					g1.attr({transform: 'rotate(0 104 50)'});
					rightforward();
				});

		}
		function rightforward(){
			g5.stop().animate(
				{transform: 'r-20, 300, 50'},
				500,mina.easein,
				function(){
					g5.attr({transform: "rotate(-20 300 50)"});
					righttback();
				});
		}
		function righttback(){
			g5.stop().animate(
				{transform: 'r0, 300, 50'},
				500,mina.easeout,
				function(){
					g5.attr({transform: 'rotate(0 300 50)'});
					leftforward();
				});

		}

		console.log(s.innerSVG());

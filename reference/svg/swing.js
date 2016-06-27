


		var s = Snap.select("#swingLarge");


		
		var mid = 650;
		var radius = 50;
		var topLine = s.line(mid-5*radius, 150, mid+5*radius, 150);
		topLine.attr({
			stroke: "#666",
			strokeWidth: 8
		});
		var l1 = s.line(mid-radius*4-14, 150, mid-radius*4-14, 400);
		l1.attr({
			stroke: "#666",
			strokeWidth: 8
		});
		var b1 = s.circle(mid-radius*4-14, 400, radius);
		b1.attr({
			fill: "#111",
			stroke: "#666",
			strokeWidth: 8
		});
		var l2 = s.line(mid-radius*2-7, 150, mid-radius*2-7, 400);
		l2.attr({
			stroke: "#666",
			strokeWidth: 8
		});
		var b2 = s.circle(mid-radius*2-7, 400, radius);
		b2.attr({
			fill: "#111",
			stroke: "#666",
			strokeWidth: 8
		});
		var l3 = s.line(mid, 150, mid, 400);
		l3.attr({
			stroke: "#666",
			strokeWidth: 8
		});
		var b3 = s.circle(mid, 400, radius);
		b3.attr({
			fill: "#111",
			stroke: "#666",
			strokeWidth: 8
		});
		var l4 = s.line(mid+radius*2+7, 150, mid+radius*2+7, 400);
		l4.attr({
			stroke: "#666",
			strokeWidth: 8
		});
		var b4 = s.circle(mid+radius*2+7, 400, radius);
		b4.attr({
			fill: "#111",
			stroke: "#666",
			strokeWidth: 8
		});
		var l5 = s.line(mid+radius*4+14, 150, mid+radius*4+14, 400);
		l5.attr({
			stroke: "#666",
			strokeWidth: 8
		});
		var b5 = s.circle(mid+radius*4+14, 400, radius);
		b5.attr({
			fill: "#111",
			stroke: "#666",
			strokeWidth: 8
		});

		var g1 = s.group(l1,b1);
		var g5 = s.group(l5,b5);
		leftforward();
		function leftforward(){
			g1.stop().animate(
				{transform: 'r30, 436 150'},
				500,mina.easein,
				function(){
					g1.attr({transform: 'rotate(30 436 150)'});
					leftback();
				});
		}
		function leftback(){
			g1.stop().animate(
				{transform: 'r0, 436, 150'},
				500,mina.easeout,
				function(){
					g1.attr({transform: 'rotate(0 436 150)'});
					rightforward();
				});

		}
		function rightforward(){
			g5.stop().animate(
				{transform: 'r-30, 864, 150'},
				500,mina.easein,
				function(){
					g5.attr({transform: "rotate(-30, 864 150)"});
					righttback();
				});
		}
		function righttback(){
			g5.stop().animate(
				{transform: 'r0, 864, 150'},
				500,mina.easeout,
				function(){
					g5.attr({transform: 'rotate(0 864 150)'});
					leftforward();
				});

		}

		console.log(s.innerSVG());
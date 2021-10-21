class bob
{
	constructor(x,y,r)
	{
		var options={
			
			restitution:1,
			friction:0,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
		
			fill(255,0,255)
			
			ellipse(0,0,this.r*2, this.r*2);
			pop()
			
	}

}


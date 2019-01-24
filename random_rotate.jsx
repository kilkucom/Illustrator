// simply random rotation

doc = app.activeDocument;
selected = doc.selection;
nSel = selected.length;

rotateMin = 0;
rotateMax = 360;


if(rotateMin > rotateMax)
{
	temp = rotateMin;
	rotateMin = rotateMax;
	rotateMax = temp;
}
if(rotateMin<0)
	opMIn = 0;
if(rotateMax>1000)
	rotateMax = 1000;

for(i=0; i<nSel; i++)
{
	resRotate = Math.floor(Math.random() * (rotateMax - rotateMin + 1)) + rotateMin;
	selected[i].rotate(resRotate, resRotate);
}

/*
TO DO
 - wrap in to a js function
 - build UI rotate min rotate max seed and preview
 - update discription in README.md
*/

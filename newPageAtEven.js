function newPageAtOdd()
{
	for (var i = 1; i <= this.numPages; i++) {
		if (i % 2) {
			var Size = this.getPageBox("Crop", this.numPages-1);
		    this.newPage(i, {nWidth: Size[2], nHeight: Size[1]});
		}
	}
}



for (var i = 1; i <= this.numPages; i++) {
	if (i % 2) {
		var Size = this.getPageBox("Crop", this.numPages-1);
	    this.newPage(i, Size[2], Size[1]);
	}
}
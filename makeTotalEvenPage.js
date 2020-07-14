if (this.numPages % 2) {
    var Size = this.getPageBox("Crop", this.numPages-1);
    this.newPage(this.numPages, Size[2], Size[1]);
}
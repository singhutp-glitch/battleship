class Ship
{
    constructor(length)
    {
        this.length=length;
        this.noOfHits=0;
        this.sunkStatus=false;
    }
    hit()
    {
        if(this.noOfHits<this.length)
        {
            this.noOfHits++;
        }
    }
    isSunk()
    {
        if(this.noOfHits>=this.length)
        {
            this.sunkStatus=true;
        }
        return this.sunkStatus;
    }
}

module.exports=Ship;
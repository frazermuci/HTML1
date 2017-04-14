/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var globalListOfGenPageFunctions = []

function Product(imgPath, price)
{
    this.imgPath = imgPath;
    this.price = price;
    this.toHTML = genToHTML(this);
    //this.genPage = genGenPage(this);
};

var p = new Product("w","a");
p.g = 9;
console.log(p.toHTML());

//solution to use genPage in generated HTML

function genToHTML(product)
{
    ///////////////////Nested Helper Functions///////////////////////
    ////////////////////////////////////////////////////////////////
    function skip(productEntry)
    {
        return productEntry == "toHTML" || productEntry == "genPage";
    }
    
    /* addToGlobList(product)
    {
        globalListOfGenPageFunctions = 
                globalListOfGenPageFunctions.concat(product.genPage);
    }*/
    
    function genOnClickString(unrolledProduct)
    {
       /* return "globalListOfGenPageFunctions"+
               "["+globalListOfGenPageFunctions.length-1+"]();";*/
        return "genPageFromProduct("+unrolledProduct+")";
    }
    /////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    function nest()
    {
        var str = "<TR>\n";
        var productEntries = Object.entries(product);
        for(var i = 0; i < productEntries.length; ++i)
        {
            if(skip(productEntries[i][0]))
            {
                continue;
            }
            if(i == 0)
            {
                //addToGlobList(product);
                str = str + "<IMG src=\"" + productEntries[i][1] + "\" "+
                            "onclick=\""+genOnClickString()+"\"/>\n";
            }
            else
            {
                str = str + "<TH>" + productEntries[i][0] + "</TH>\n" + 
                            "<TH>" + productEntries[i][1] + "</TH>\n";
            }
        }
        return str + "</TR>\n";
    }
    return nest;
}

/*function genGenPage(product)
{
    
}*/

function genPageFromProduct(unrolledProduct)
{}

function generateTable(productList)
{
    var str = "<TABLE>\n";
    for(var i = 0; i < productList.length; ++i)
    {
        str = str + productList[i].toHTML();
    }
    return str + "</TABLE>\n";
}
/*function 

function genTable(productList)
{}//Object that represents */
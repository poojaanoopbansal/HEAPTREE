class MaxHeapTree
{
    elementShowTreeArray = document.getElementById("showTreeArray");
    elementShowTreeAfterRemovingNodeArray = document.getElementById("showTreeAfterRemovingNodeArray");
    elementDrawTree = document.getElementById("drawTree");
    constructor()
    {
        this.treeArray = [0];
    } 
    insert(data) {
       if (this.treeArray.length === 1 ) {
           this.treeArray.push(data);
       }
       else {
           this.treeArray.push(data);
            this.insertNode(this.treeArray.length-1);
       }
    }
    insertNode(index) {
       let parentIndex = Math.floor(index/2);
       let parentNode = this.treeArray[parentIndex];
       let childNode = this.treeArray[index];
       // if parent child is smaller than the child data then swap the data 
       if (parentNode < childNode && index !== 1) {
           let aux = childNode;
           this.treeArray[index] = parentNode;
           this.treeArray[parentIndex] = aux;
           this.insertNode(parentIndex);
        }
    }

    remove() {
        this.treeArray[1] = this.treeArray.pop();
        this.arrangeNode(1);
        this.elementShowTreeAfterRemovingNodeArray.innerHTML = "<b>Array of heap tree after removing node</b> ";
        this.treeArray.forEach((element, index) => { if(index !== 0) this.elementShowTreeAfterRemovingNodeArray.innerHTML += element +" " });
    }

    arrangeNode(index) {
        var maxNo = Math.max();
        var leftChildNode = this.treeArray[2*index];
        var rightChildNode = this.treeArray[2*index + 1];
        if (leftChildNode > rightChildNode && this.treeArray[index] < leftChildNode) {
            var aux = leftChildNode;
            this.treeArray[2*index] = this.treeArray[index];
            this.treeArray[index] = aux;
            this.arrangeNode(2*index); 
        } else if (leftChildNode < rightChildNode && this.treeArray[index] < rightChildNode) {
                var aux = rightChildNode;
                this.treeArray[2*index + 1] = this.treeArray[index];
                this.treeArray[index] = aux;
                this.arrangeNode(2*index + 1); 
        }
   }

   showMaxTreeHeapArray() {
        this.treeArray.forEach((element, index) => { if(index !== 0) this.elementShowTreeArray.innerHTML += element +" " });
        this.elementShowTreeArray.innerHTML += "</br>";
   }

   showTree() {
       let row = 0;
       let column = 1;
       let j;
       while (column < this.treeArray.length) {
            if (row === 0) {
                this.elementDrawTree.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;"+this.treeArray[column] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                this.elementDrawTree.innerHTML += "</br></br>";
                column++;
            } else {
                this.elementDrawTree.innerHTML += "<br>";
                for (j=1; j <= 2*row; j++) {
                    if (column < this.treeArray.length) {
                        this.elementDrawTree.innerHTML += this.treeArray[column] + "&nbsp;&nbsp;&nbsp;&nbsp;";
                        column++;
                    } else {
                        this.elementDrawTree.innerHTML += " "+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                    }
                }
                this.elementDrawTree.innerHTML += "</br></br>";
            }
        row++;

       }
   }
}
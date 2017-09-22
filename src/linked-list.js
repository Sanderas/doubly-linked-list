const Node = require('./node');

class LinkedList {
    constructor(_head=null, _tail=null, length=0) {
       this._head=_head;
       this._tail=_tail;
       this.length=length;
    }

    append(data) {
       if (this.isEmpty()==true) {
         var p=new Node();
         p.prev=undefined;
         p.next=undefined;
         p.data=data;
         this.length=1;
         this._head=p;
         this._tail=p;
      }
      else {
         this._tail.next=new Node();
         this._tail.next.data=data;
         this._tail.next.next=undefined;
         this._tail.next.prev=this._tail;
         this._tail=this._tail.next;
         this.length=this.length+1;
      }
      return this;
    }

    head() {
       if (this.isEmpty()==true) return null;
       else return this._head.data;
    }

    tail() {
       if (this.isEmpty()==true) return null;
       return this._tail.data;
    }

    at(index) {
       if (this.isEmpty()==true) return undefined;
         else {
            var p=this._head;
            var i=0;
            while (p!=undefined && i<index) {
               p=p.next;
               i=i+1;
            }
            if (p==undefined) return undefined;
            else {
               return p.data;
            }
         }
    }

    insertAt(index, data) {
       var i=0;
       if (this.isEmpty==true) console.log("The insertion is impossible because list is empty");
       else {
           var p=this._head;
           
            
            if (index>this.length+1) console.log("The insertion is impossible because list length is less then index");
            else {
                 if (index==this.length) {
                             this.append(data);
                             this.length=this.length+1;
                 }
                 else {
                    if (index==0) {
                          var p=this._head;
                          var p1=new Node();
                          p1.data=data;
                          p1.prev=undefined;
                          p1.next=p;
                          this._head=p1;
                          this.length=this.length+1;
                    }
                    if (index<this.length) {
                          var p1=this._head;
                          var j=0;
                          while (j<index) {
                              p1=p1.next;
                              j=j+1;
                          }
                          var p2=p1;
                          p1=p1.prev;
                          var p=new Node();
                          p.data=data;
                          p1.next=p;
                          p1.next.next=p2;
                          p1.next.next.prev=p;
                          p1.next.next.prev.prev=p1;
                          while (j>0) {
                              p=p.prev;
                              j=j-1;
                          }
                          this._head=p;
                          this.length=this.length+1;
                    }
                 }
            }
       }
    }

    isEmpty() {
       if (this._head==null && this._tail==null) return true;
       else return false;
    }

    clear() {
       this._head=null;
       this._tail=null;
       this.length=0;
       return this;
    }

    deleteAt(index) {
       var i=1;
       var p;
       
       if (index<this.length) {
              p=this._head;
              if (this.length==1) {
                     this._tail=null;
                     this._head=null;
                     this.length=0;
                 return this;
                 }
              if (index==this.length-1) {
                 
                 this._tail=this._tail.prev;
                 this._tail.next=undefined;
                 this.length=this.length-1;
              } 
              if (index>0 && index<this.length-1) {
                 for (var j=0; j<index; j++) {
                    p=p.next;
                 }
                 p=p.prev;
                 var p1=p.next.next;
                 p.next=p1;
                 p1.prev=p;
                 for (var j=index-1; j>0; j--) {
                    p=p.prev;
                 }
                 this._head=p;
                 this.length=this.length-1;
              }
              if (index==0 && this.length!=1) {
                 this._head=this._head.next;
                 this._head.prev=undefined;
                 this.length=this.length-1;
              }     
       }
    return this;
    }

    reverse() {
       var a=[];
        a[0]=this._head;
        var p=this._head;
        var i=1;
        
        while (i<this.length) {
               p=p.next;
               a[i]=p;
               i=i+1;
            }
        var p1=this.length-1;
        this._head=a[p1];
        this._head.prev=undefined;
        this._head.next=a[p1-1];
        p=this._head;
        for (var i=p1-1; i>0; i--) {
            p=p.next;
            p.next=a[i-1];
            p.prev=a[i+1];
        }
        this._tail=a[0];
        this._tail.next=undefined;
        this._tail.prev=a[1];
        for (var i=0; i<this.length-2; i++) {
           p=p.prev;
        }
        this._head=p;
    return this;
    }

    indexOf(data) {
       var p=this._head;
       var i=0;
       while (p!=undefined) {
              if (p.data==data) {
                 return i;
              }
              p=p.next;
              i=i+1;
       }
       if (p==undefined) return -1;
    }
}

module.exports = LinkedList;

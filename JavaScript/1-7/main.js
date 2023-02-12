class Taiyaki{
    constructor(content){
        this.content = content;
    }
    ContentName(){
        console.log("中身は" + this.content + "です");
    }
}
let anko = new Taiyaki("あんこ");
anko.ContentName();
let cream = new Taiyaki("クリーム");
cream.ContentName();
let cheese = new Taiyaki("チーズ");
cheese.ContentName();
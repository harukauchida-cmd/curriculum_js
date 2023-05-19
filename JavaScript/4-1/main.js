var app = new Vue({
    el: '#app',
    data: {
        // ToDoの配列
        list: [],
        // ToDoの追加（文字列）
        addText: '',
        // リアルタイム検索（文字列）
        searchKeyword: '',
    },
    //watchでlistの変更を監視
    watch: {
        list: {
            handler: function() {
                //localStorageにデータを保存
                localStorage.setItem("list", JSON.stringify(this.list));
            },
            deep: true
        }
    },
    //マウントされた時にlocalStorageからデータを取得
    mounted: function() {
        this.list = JSON.parse(localStorage.getItem("list")) || [];
    },
    // 算出プロパティ
    computed: {
        // 残タスク数
        remainingTasks:function(){
            return this.list.filter(function(todo){
                // falseの時にtrueを返す
                return !todo.isChecked;
                // 配列の要素数を取得
            }).length;
    },
    // キーワードで絞り込み
    filteredList:function(){
        // searchKeywordにkeywordを代入（キーワード欄の値取得）
        var keyword = this.searchKeyword;
        // もしkeywordが入力されたら
        if (keyword) {
        return this.list.filter(function(todo){
            // indexOf(keyword) !== -1 → キーワードが見つからなかった場合-1を返す
            return todo.text.indexOf(keyword) !== -1;
        });
        // キーワードが入力されていない時はリストを返す
    }else{
        return this.list;
    }
}
},
    methods: {
        addToDo: function() {
            if (this.addText !== '') {
                this.list.push({
                    text: this.addText, 
                    isChecked: false,
                });
            }
            this.addText = '';
        },
        deleteBtn: function() {
            this.list = this.list.filter(function(todo) {
                return !todo.isChecked;
            });
        }
    }
});

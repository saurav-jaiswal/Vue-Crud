new Vue({
    el: '#app',
    data: {
        user: {},
        saveBtn: true,
        updateBtn: false,
        data:{},
        id:0,
        users: []
    },
    methods: {
        addData: function () {
            var fname = this.user.fname;
            var lname = this.user.lname;
            var contact = this.user.contact;
            this.id++;
            this.users.push({'fname': fname, 'lname': lname, 'contact': contact, 'id':this.id});
            this.user = {};
        },
        delUser(item) {
            let del = this.users.indexOf(item);
            let result = confirm('Are you sure want to delete?');
            if (result == true) {
                this.users.splice(del, 1)
            }
        },
        edit: function (item) {
            this.saveBtn = false;
            this.updateBtn = true;
            this.user = Object.assign({}, item);
        },
        updateData: function (id) {
            let myid = id - 1;
            Object.assign(this.users[myid], this.user);
            this.user = {};
            this.saveBtn = true;
            this.updateBtn = false;
        }
    }
});

function require([], ck) {
    require(['../config'], function() {
        require(['require', 'define'], function(require, define) {
            console.log(require);
            console.log(define.dy(1, 3))

        })
    })
}
require(['require'], ck)
'use strict'

exports.handler = function(event, context, callback) {
    var responese = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8'
        },
        body: '<p>Hello World!</p>'
    }
    callback(null, responese)
}
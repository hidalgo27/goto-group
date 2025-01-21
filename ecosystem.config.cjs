module.exports = {
    apps: [
        {
            name: 'goto.group:3002',
            port: '3002',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}

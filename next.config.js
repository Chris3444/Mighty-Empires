/** @type {import('next').NextConfig} */

module.exports =  {
    webpack (config, {dev}) {
        if (dev) {
            config.watchOptions = {
                poll: 500,
                aggregateTimeout: 400,
            }
        }
        return config
    }
}

const path = require('path')

const glob = require('glob')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var entries = function () {
    let dir = path.resolve(__dirname, './src/entries')
    let entryFiles = glob.sync(dir + '/*.js')

    let map = {}

    entryFiles.forEach(function (filePath) {
        let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        map[ filename ] = filePath
    })
    return map
}

const env = process.env.NODE_ENV

let publicPath = '',
    finename = '',
    remotePath = ''

if( env === 'production' ) {
    publicPath = './'
    finename = 'js/[name].[chunkhash].js'
    remotePath = ''
} else if( env === 'development' ) {
    publicPath = './'
    finename = 'js/[name].js?v=[chunkhash]'
    remotePath = ''
}

let webpackConfig = {
    entry: entries(),

    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: publicPath,
        filename: finename
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },

    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader!postcss-loader"
                })
            },

            {
                test: /\.js$/,
                use: 'babel-loader?cacheDirectory',
                exclude: /node_modules/
            },

            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        extractCSS: true
                    }
                }
            },

            {
                test: /\.(svg)(\?.+)?$/,
                include: [path.resolve(__dirname, './src/static/icons')],
                use: {
                    loader: 'svg-sprite-loader',
                    options: {
                        symbolId: 'icon-[name]'
                    }
                }
            },
            
            {
                test: /\.(png|jpg|gif)(\?.+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'images/[hash:8].[ext]'
                    }
                }
            },
            
            {
                test: /\.(eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                exclude: [path.resolve(__dirname, './src/static/icons')],
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'fonts/[hash:8].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].css?v=[contenthash]',
            allChunks: true
        }),
  
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendors", "manifest"]
        }),
  
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify( process.env.NODE_ENV )
            }
        })
    ],
    devServer: {
      host: '127.0.0.1',
      port: 3000
    },
    devtool: process.env.NODE_ENV == 'development' ? '#eval-source-map': false
}

let filenames = Object.keys( entries() )

filenames.forEach(filename => {
    if( filename == 'vendors' ) {
        return
    }

    let htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: './src/template.html',
        filename: filename + '.html',
        chunks: [filename, 'vendors', 'manifest'],
        title: '应用名称',
        remotePath: remotePath
    })

    webpackConfig.plugins.push( htmlWebpackPlugin )
})

module.exports = webpackConfig

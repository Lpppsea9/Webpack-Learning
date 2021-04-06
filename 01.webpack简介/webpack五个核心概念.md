1. Entry
    入口(Entry)指示 Webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。

2. Output
    输出(Output)指示 Webpck 打包后的资源 bundles 输出到哪里去，以及如何命名。

3. Loader
    Loader 让 Webpack 能够去处理那些非 JavaScript 文件(webpack 自身只理解JavaScript)

4. Plugins
    插件(Plugins) 可以用于执行范围更广的任务，插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等

5. Mode(development,production)
    模式(Mode)指示 Webpack 使用相应模式的配置
    <1> 选项: development 
        描述: 会将 process.env.NODE_ENV 的值设为 development.
            启用 NamedChunksPlugin 和 NamedModulesPlugin. 
        特点: 能让代码本地调试运行的环境

    <2> 选项: production  
        描述: 会将 process.env.NODE_ENV 的值设为 production.
            启用 FlagDependcyUsagePlugin,
                FlagIncludedChunksPlugin,
            ModuleConcatenationPlugin, NoEmitOnErrorPlugin,
            OccurrenceOrderPlugin,SideEffectsFlagPlugin 和
            UglifyJsPlugin.
        特点: 能让代码优化上线运行的环境
    
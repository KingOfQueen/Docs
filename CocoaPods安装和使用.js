1、安装cocoapods
CocoaPods是使用Ruby构建的，可以使用OS X上的默认Ruby进行安装。建议使用默认的ruby环境安装。
使用默认的Ruby安装需要在安装gem时使用sudo。
这里介绍Xcode 8 & Xcode 9的安装方式，执行：
$ sudo gem install cocoapods

2、工程使用cocoapods
CocoaPods提供了pod init命令来创建Podfile。所以我们需要进到程序所在目录创建Podfile文件,然后创建 app.xcworkspace
$ cd app.xcodeproj （工程所在目录）
$ pod init（创建Podfile）
$ pod install（创建 app.xcworkspace等）

3、打开工程文件
引用了Cocoapods之后，打开工程需要打开的是 app.xcworkspace 非 app.xcodeproj。
通过工程找到Podfile添加需要使用的第三方库，例如：

# platform :ios, '9.0'
target 'App' do
  # use_frameworks!

  # Pods for SwiftMonkey

  target 'AppUITests' do
    inherit! :search_paths
    # Pods for testing
  end
end
更多资讯可以访问官网 https://cocoapods.org/
// ==UserScript==
// @name        github_ui_zh-cn
// @namespace   github
// @include     http*://github.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.js
// @version     1
// @grant       none
// ==/UserScript==

window.onload = function () {
    /**
     * 字典仓库
     * @type {{Explore: string, Gist: string, Blog: string, Help: string, Skip to content: string, New repository: string, New organization: string, Create Organization: string, News Feed: string, Pull Requests: string, Issues: string, Stars: string, Set up Git: string, A quick guide to help you get started with Git.: string, Create repositories: string, Repositories are where you’ll work and collaborate on projects.: string, Fork repositories: string, Forking creates a new, unique project from an existing one.: string, Be social: string, Send pull requests, follow friends.Star and watch projects.: string, Repository metadata and plugin support for GitHub Pages: string, All Repositories: string, Public: string, Private: string, Sources: string, Forks: string, Status: string, Training: string, Shop: string, About: string, Terms: string, Privacy: string, Security: string, Contact: string, GitHub Bootcamp: string, If you are still new to things, we’ve provided a few walkthroughs to get you started.: string}}
     */
    var lang = {
        'This repository': '这个版本库',
        'public': '公开仓库',
        'Explore': '扩展',
        'Gist': '要点',
        'Blog': '博客',
        'Help': '帮助',
        'Skip to content': '跳转到内容',
        'New repository': '新的版本库',
        'New organization': '新的组织',
        'Create Organization': '建立组织',
        'News Feed': '新闻提要',
        'Pull Requests': '请求拉取',
        'Issues': '问题',
        'Stars': '赞',
        'Set up Git': '设置git',
        'A quick guide to help you get started with Git.': '帮助你开始使用git的快速指南',
        'Create repositories': '创建版本库',
        'Repositories are where you’ll work and collaborate on projects.': '版本库是你将要在其中工作和协作的项目',
        'Fork repositories': '克隆版本库',
        'Forking creates a new, unique project from an existing one.': '从现用项目克隆一个新的',
        'Be social': '成为社交',
        'Send pull requests, follow friends.Star and watch projects.': '发送拉取请求,跟随好友,观看项目',
        'Repository metadata and plugin support for GitHub Pages': '版本库的元数据和github插件支持',
        'All Repositories': '所有版本库',
        'Public': '公开',
        'Private': '私有',
        'Sources': '来源',
        'Forks': '克隆',
        'Status': '状态',
        'Training': '练习',
        'Shop': '商店',
        'About': '关于',
        'Terms': '条款',
        'Privacy': '隐私',
        'Security': '安全',
        'Contact': '联系',
        'GitHub Bootcamp': 'GitHub的集训',
        'If you are still new to things, we’ve provided a few walkthroughs to get you started.': '如果你仍然对新的事物，我们提供了让你开始一些演练。',
        'Popular repositories': '热门版本库',
        'Pulse': '脉冲',
        'Settings': '设置',
        'Repository Name': '仓库名',
        'Graphs': '图表',
        'Network': '网络',
        'contributor': '贡献者',
        'branch': '分支',
        'commit': '提交',
        'releases': '发布',
        'Notification status': '通知状态',
        'Unwatch': '点击',
        'fork': '克隆',
        'Wiki': '维基',
        'Code': '代码',
        'Repository Name': '版本库名',
        'Default Branch': '默认分支',
        'Options': '选项',
        'Collaborators': '合作者',
        'Webhooks & Services': '网页钩子&服务',
        'Deploy Keys': "配置密匙",
        'Features': '产品特点',
        'Wikis': '维基百科',
        'GitHub Wikis are the simplest way to let others contribute content. Any GitHub user can create and edit pages to use for documentation, examples, support or anything you wish.': '',
        'Restrict edits to Collaborators only': '只限制对合作者的编辑',
        'Public Wikis will still be readable by everyone.': '公共维基仍将由所有人读取',
        'GitHub Pages': 'github的页面',
        'Delete this repository': '删除这个版本库',
        'Once you delete a repository, there is no going back. Please be certain.': '你只有一次删除机会,这是不能返回的,请注意',
        'Transfer': '转让',
        'Transfer Ownership': '转让所有权',
        'Transfer this repo to another user or to an organization where you have admin rights.': '将这个版本库转让给另一个用户或者组织,如果你有管理员权限的话',
        'Make this repository private': '使这个仓库私有化',
        'Please <a href="/settings/billing">upgrade your plan</a> to make this repository private.': '请 <a href="/settings/billing">升级你的账户</a>来使这个仓库私有化.',
        'Danger Zone': '警告区',
        'Rename': '重命名',
        'Automatic Page Generator': '自动页面生成器',
        'Create a beautiful site for your project with our GitHub Pages generator.': '在我们的<a href="http://pages.github.com">github页面</a>为你的项目生成一个美观的网站.',
        'Author your content in our markdown editor, select a theme, then publish.': 'Author your content in our markdown editor, select a theme, then publish.',
        'To publish a page manually, push an HTML or <a href="https://github.com/mojombo/jekyll" target="_blank">jekyll</a> site to  a branch named <code>gh-pages</code>.<a href="https://help.github.com/pages">More info.</a>': '要手动发布页面，按下HTML或<a href="https://github.com/mojombo/jekyll" target="_blank">杰基尔</a>网站去分支名为<code>gh-pages</code>网页。<a href="https://help.github.com/pages">更多信息。</a>'


    };
    /**
     * 执行翻译
     */
    Translation($('p'));
    Translation($('h3'));
    Translation($('h4'));
    Translation($('a'));
    Translation($('span'));
    Translation($('label'));
    Translation($('button'));


    /**
     * 汉化函数
     * @param tag
     * @constructor
     */
    function Translation(tag) {
        $.each(tag, function (i, n) {
            var txt = '';
            txt = $.trim($(n).html());
            $.each(lang, function (j, m) {
                // alert(j + '===========' + m);
                if (j == txt) {
                    $(n).html(m);
                }
            });
        });
    }


};



jekyll_site
===========

Base Jekyll site for documents

1. Create new repo on GitHub
1. Create local folder
1. `git init`
1. `git checkout --orphan gh-pages`
1. `wget https://github.com/amacfie/jekyll_site/archive/master.zip`
1. `7z x master.zip`
1. `cp -r jekyll_site-master/. ./`
1. `rm -rf jekyll_site-master master.zip`
1. `git remote add origin https://github.com/username/reponame.git`
1. `git push -u origin gh-pages`
1. edit `name` and `baseurl` in `_config.yml`
1. edit the content: the markdown files

to link to page.md, create a link to `{{ site.baseurl }}/page.html`

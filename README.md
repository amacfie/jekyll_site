jekyll_site
===========

This is a template for 
[Jekyll](http://jekyllrb.com/docs/home/)
static sites, which you can host for free as GitHub project 
[Pages](https://help.github.com/categories/20/articles).
This template is useful for simple articles, documents, or book-like websites.
When used for a Github project page, the repository is completely forkable, i.e.
someone can fork your document and work on their own copy right away without
reconfiguring.

Simply copy this template into an orphan branch (called `gh-pages`) of a 
project repo on Github, and the site will get served at 
`http://yourgithubusername.github.io/yourreponame`.
When you push to the branch, the site will be rebuilt.
In the case of a standalone document with no code branches, the project is empty
except for the Page (i.e. no `master` branch).

The markdown engine used is [kramdown](http://kramdown.gettalong.org/).
Math notation via [MathJax](http://www.mathjax.org/) is supported.

## Getting started
1. Create new repo on GitHub
1. Create corresponding local folder
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
1. replace this `README.md` file

To link to `page.md`, create a link to `{{ site.baseurl }}/page.html`.
This is shown in the included markdown files.

Use `###`, `####`, etc. for headings. 
(The document (site) title is `h1`, and the page title is `h2`.)

Consult the 
[Jekyll documentation](http://jekyllrb.com/docs/home/) 
and
[GitHub Pages documentation](https://help.github.com/categories/20/articles)
for more information, e.g. how to locally build your site.

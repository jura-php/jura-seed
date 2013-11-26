#Usage

1. Clone this repository. Ex: `$ git clone git@bitbucket.org:joyinteractive/joy-seed.git nome-do-projeto`
2. Remove the .git from the cloned repository running a `rm -Rf .git` command on the root of the project. Ex: `$ cd nome-do-projeto && rm -Rf .git`
3. Init a new git repository by running `$ git init` and then bind to the remote repo. Ex: `$ git init && git remote add origin git@bitbucket.org:joyinteractive/nome-do-projeto.git`
4. Add system as a submodule by running `$ git submodule add git@bitbucket.org:joyinteractive/joy-lib-j.git system`
5. Install the node dependencies by running a `$ npm install`. These dependencies are used by [Grunt](http://gruntjs.com)
6. Change the name of the project on the `package.json` file.
7. If you need to know what Grunt can do, run `$ grunt help`.
8. Its time to run `$ grunt doctor` to see if it is all right.


#Front-end
##Stylus
You need to compile your .styl files by running `$ grunt css` each time or `$ grunt dev` to enable the watch service. I'll compile the files each time you save and enable the LiveReload.

##LiveReload
To use the LiveReload you need to run `$ grunt dev` and then enable the [livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) plugin on Chrome.

##Imagemagick
You need Imagemagick installed to generate sprites. You can do so by running `$ brew install imagemagick`.

##Generating the distribution version
When you run the `$ grunt build` task, the Grunt will generate a folder `/public/_dist` with all the compiled files and a copy of files that wont be compiled. Its important to learn about Grunt and read the Gruntfile.js to see what Grunt are doing exactly.
After running the build you need to enable it on `/app/config/application.php` by setting `usedist` to true.

#Backend
To start using the Backend, you need to configure the `/config/database.php`. If this file doesn't exists you need to duplicate the `/config/databases.sample.php`.
A better explanation will be written here soon. But not too long. hehehe :)

#Deploy
Normally, we use [git-ftp](https://github.com/resmo/git-ftp) on our projects. You need to configure it by openning the `.git/config` file and setting up the server configuration. The first developer that configure this must edit the Wiki on bitbucket and paste the [git-ftp] configuration. Example:

```
[git-ftp]
	url = ftp.site.com.br/public_html
	user = siteuser
	password = password123
```

You need to read the documentation of git-ftp but is important to know some details:

- If you are deploying for the first time, you need to run a `git init` instead of `git push`
- If there is not a configuration on Wiki's page we will be glad if you create it.

*Feel free to update this readme, and mainly correct the english mistakes*
#Usage

1. Clone this repository with `--recursive` option on git clone to get the submodule `system` wich is the core. Ex: `$ git clone --recursive git@bitbucket.org:joyinteractive/joy-lib-j.git nome-do-projeto`
2. Remove the .git from the cloned repository running a `rm -Rf .git` on the root of the project. Ex: `$ cd nome-do-projeto && rm -Rf .git`
3. Install the node dependencies by running a `$ npm install`. This dependencies are using by [Grunt](http://gruntjs.com)
4. Change the name of the project on the `package.json` file.
5. If you need to know what Grunt can do, run `$ grunt help`.
6. Its time to run `$ grunt doctor` to see if it is all right.


#Front-end
##Stylus
You need to compile your .styl files by running `$ grunt css` each time or `$ grunt dev` to enable the watch that will compile the files each time you save and enable the LiveReload.

##LiveReload
To enable the LiveReload you need to run `$ grunt dev` and then enable the [livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) plugin on Chrome.

##Generating the distribution version
When you run the `$ grunt build` task, the Grunt will generate a folder `/public/_dist` with all the compiled files and a copy of files that wont be compiled. Its important to learn about Grunt and read the Gruntfile.js to see what Grunt are doing exactly.
After run the build you need to enable it on `/app/config/application.php` by setting `usedist` to true.

#Backend
To start using the Backend, you need to configure the `/config/database.php`. If this file don't exists you need to duplicate the `/config/databases.sample.php`.
A better explanation will be written here. But not too long. hehehe :)

#Deploy
Normally, we use [git-ftp](https://github.com/resmo/git-ftp) on our projects. You need to configure it by open the `.git/config` file and setting up the server configuration. The first that configure this will edit the Wiki on bitbucket and paste the [git-ftp] configuration. Example:

```
[git-ftp]
	url = ftp.site.com.br/public_html
	user = siteuser
	password = password123
```

You need to read the documentation of git-ftp but is important to know some things:

- If you are the deploying the first time, you need to run a `git init` instead of `git push`
- If there isn't the configuration on Wiki page we will be glad if you create them.

*Feel free to update this readme, and mainly correct the english mistakes*
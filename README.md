# Lightning-js Examples
> this is currently for internal use.

Each example is it's own project and should be treated as such. All examples reside within the /examples folder, and within that, their parent category. There are data.json files associated with each parent category, and each subsiquent example. 

The example compiler will crawl over all folders recursivly within /examples and produce a global example json datafile which is used in mem cache on the web server to produce the examples page. It was designed this way to reduce the dependancy on a database, CMS and allowing multiple developers to produce examples easier.It also allows us to fix / modify example on the fly and simply run a deploy command to push to the web server and re-compile the global example json.

### Please Note
>Before commiting to git, please be sure to run the cleanup command. This is imperative, otherwise we could end up with gb's of files on the git repo, and nobody wants that!

### Getting Started

```sh
$ git clone https://github.com/Sprite-Storm/examples.git
$ cd examples
$ npm install
```

### Running An Example
> this is much cleaner if you do it in a seperate IDE

```sh
$ npm install
# move the version of lightning.js / lightning.min.js into the /static/js folder.
$ npm start
```
> the reason each project has it's own lightning src is to we can test different versions of lightning against the same example to see what breaks.

### Building
```sh
$ npm run clean
```

The cleaning script will remove all node_modules, and all lightning.js src files to reduce the repo size. 